
export interface FolderData {
    key: string;
    label: string;
    type: "folder" | "file";
    subFolders?: FolderData[];
    subFiles?: FolderData[];
}

export interface SubIssue {
    id: number;
    title: string;
    description: string;
    remidiation: string;
}

export interface Issue {
    id: number;
    color: string;
    issues: string;
    title: string;
    subIssues?: SubIssue[];
}

export interface IssueData {
    issues: Issue[];
}