
export const getContentVisibility = (showLeftSidebar: boolean, showRightSidebar: boolean) => {
    if(showLeftSidebar && showRightSidebar) {
        return 'span 6 / span 6'
    } else if(showRightSidebar || showLeftSidebar) {
        return 'span 8 / span 8'
    } else {
        return 'span 12 / span 12'
    }
};

export const getLinkAndTitle = (type: string, issue: string | undefined, issueCount: number | undefined): { link: string; subLink: string | null; title: string | null;} => {
    let link;
    let subLink = null;
    let title = null;
    if(type === 'sidebar') {
        link = 'Count of Issues';
        if(issue) {
            subLink = issue;
            if(issueCount && issueCount > 0) {
               title = `Issue #${issueCount}`;
            } else {
                title = null;
            }
        } else {
            subLink = null;
        }
    } else {
            link = 'AI Audit',
            subLink = 'My Projects',
            title = 'Code Editor'
    }
    return { link, subLink, title };
};

export const getCodeEditorContent = () => {
    const text = `uint32 lower = 0;
    uint32 upper = nCheckpoints - 1;
    while (upper > lower) {
        uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
        Checkpoint memory cp = checkpoints[account][center];
        if (cp.fromBlock == blockNumber) {
            return cp.votes;
        }
    }
    uint32 lower = 0;
    uint32 upper = nCheckpoints - 1;
    while (upper > lower) {
        uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
        Checkpoint memory cp = checkpoints[account][center];
        if (cp.fromBlock == blockNumber) {
            return cp.votes;
        }
    }
    uint32 lower = 0;
    uint32 upper = nCheckpoints - 1;
    while (upper > lower) {
        uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
        Checkpoint memory cp = checkpoints[account][center];
        if (cp.fromBlock == blockNumber) {
            return cp.votes;
        }
    }
    while (upper > lower) {
        uint32 lower = 0;
        uint32 upper = nCheckpoints - 1;
        while (upper > lower) {
            uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
            Checkpoint memory cp = checkpoints[account][center];
            if (cp.fromBlock == blockNumber) {
                return cp.votes;
            }
        }
    }`;
    return text;
};