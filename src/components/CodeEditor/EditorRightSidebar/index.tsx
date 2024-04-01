'use client'
import Breadcrumb from '@/common/Breadcrumb';
import IssueStages from '@/common/IssueStages';
import { Issue, IssueData, SubIssue } from '@/types';
import React, { FC, useState } from 'react';


interface IEditorRightSidebarProps {
    issueData: IssueData;
    showLeftSidebar: boolean;
    showRightSidebar: boolean;
}

const EditorRightSidebar: FC<IEditorRightSidebarProps> = (props) => {
    const { issueData, showLeftSidebar, showRightSidebar } = props;
    const [selectedContentType, setSelectedContentType] = useState(1);
    const [currentIssueType, setCurrentIssueType] = useState<Issue | null>(null);
    const [currentIssue, setCurrentIssue] = useState<SubIssue | null>(null);

    const handleIssueChange = (type: number, data: any) => {
        setSelectedContentType(type);
        if (type === 2) {
            setCurrentIssueType(data);
        } else if (type === 3) {
            setCurrentIssue(data);
        } else {
            setCurrentIssueType(null);
            setCurrentIssue(null);
        }
    }

    return (
        <div className='h-full rounded-[3px] bg-content_background flex flex-col justify-start'>
            <div className='px-4 w-full py-4 h-10'>
                <Breadcrumb type='sidebar' issue={(currentIssueType as Issue)?.title} issueCount={(currentIssue as SubIssue)?.id} />
            </div>
            <div className='px-4 w-full py-2'>
            <div className='border-1 border-b border-border_color w-full' />
            </div>
            <IssueStages
                type={selectedContentType}
                allIssues={issueData}
                typeIssues={currentIssueType}
                issue={currentIssue}
                handleIssueChange={(type, issue) => handleIssueChange(type, issue)}
                showLeftSidebar={showLeftSidebar}
                showRightSidebar={showRightSidebar}
            />
        </div>
    )
}

export default EditorRightSidebar;