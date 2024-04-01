import { IssueData } from '@/types';
import React, { FC } from 'react';
import AllIssues from './AllIssues';
import DescriptiveIssues from './DescriptiveIssues';
import TypeIssues from './TypeIssue';

interface IStagesProps {
    allIssues: IssueData;
    type: number;
    typeIssues: any;
    handleIssueChange: (type: number, data: any) => void;
    issue: any;
    showLeftSidebar: boolean;
    showRightSidebar: boolean;
}

const Stages: FC<IStagesProps> = (props) => {
    const { typeIssues, type, handleIssueChange, allIssues, issue, showLeftSidebar, showRightSidebar } = props;
	switch(type) {
	case 3:
		return <DescriptiveIssues issue={issue} showLeftSidebar={showLeftSidebar} showRightSidebar={showRightSidebar} />;
	case 2:
		return <TypeIssues typeIssues={typeIssues} handleIssueChange={handleIssueChange} />;
	default:
		return <AllIssues allIssues={allIssues} handleIssueChange={handleIssueChange} />;
	}
};

interface IIssueStagesProps {
    allIssues: IssueData;
    type: number;
    typeIssues: any;
    issue: any;
    handleIssueChange: (type: number, data: any) => void;
    showLeftSidebar: boolean;
    showRightSidebar: boolean;
}

const IssueStages: FC<IIssueStagesProps> = (props) => {
	return (
		<Stages {...props} />
	);
};

export default IssueStages;