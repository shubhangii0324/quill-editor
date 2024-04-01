import FolderStructure from '@/common/FolderStructure';
import React, { FC } from 'react';

interface IEditorLeftSidebarProps { 
    folderData: any;
}

const EditorLeftSidebar: FC<IEditorLeftSidebarProps> = (props) => {
    const { folderData } = props;
    const openedFileKey = '1-2-3'

    return (
        <div className='h-full rounded-[3px] bg-content_background flex flex-col justify-start'>
            <div className='px-4 py-4 w-full'>
                <span className='text-text_gray text-sm leading-[18px] font-medium'>Folders & Files</span>
                <div className='border-1 border-b border-border_color w-full mt-2' />
            </div>
            <FolderStructure folderData={folderData} openedFileKey={openedFileKey} />
        </div>
    )
}

export default EditorLeftSidebar;