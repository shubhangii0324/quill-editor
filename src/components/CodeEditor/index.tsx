'use client'
import React, { FC, useState } from 'react';
import EditorContent from './EditorContent';
import EditorHeader from './EditorHeader';
import EditorLeftSidebar from './EditorLeftSidebar';
import EditorRightSidebar from './EditorRightSidebar';
import folderData from '../../data/folderStruct.json';
import issueData from '../../data/IssueData.json';
import { getContentVisibility } from '@/utils';

interface ICodeEditorProps { }

const CodeEditor: FC<ICodeEditorProps> = () => {
    const [showLeftSidebar, setShowLeftSidebar] = useState(true);
    const [showRightSidebar, setShowRightSidebar] = useState(true);
    const contentClass = getContentVisibility(showLeftSidebar, showRightSidebar);
    const handleExpandCollapse = (type: string) => {
        if (type === 'left') {
            setShowLeftSidebar(!showLeftSidebar);
        } else {
            setShowRightSidebar(!showRightSidebar);
        }
    }

    return (
        <div className='bg-dark_gray w-full mt-3 px-4 pt-[14px] pb-3 rounded flex flex-col justify-between items-center'>
            <EditorHeader />
            <div className='grid grid-cols-12 justify-start w-full gap-x-3 mt-3'>
                {
                    showLeftSidebar && (
                        <div className={`${!showRightSidebar ? 'col-span-4' : 'col-span-3'}`}>
                            <EditorLeftSidebar folderData={folderData} />
                        </div>
                    )
                }
                <div style={{ gridColumn: contentClass }}>
                    <EditorContent
                        handleExpandCollapse={handleExpandCollapse}
                        showLeftSidebar={showLeftSidebar}
                        showRightSidebar={showRightSidebar}
                    />
                </div>
                {
                    showRightSidebar && (
                        <div className={`${!showLeftSidebar ? 'col-span-4' : 'col-span-3'}`}>
                            <EditorRightSidebar issueData={issueData} showLeftSidebar={showLeftSidebar} showRightSidebar={showRightSidebar} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CodeEditor;