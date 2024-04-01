
import { FolderData } from '@/types';
import React, { FC } from 'react';
import FolderTitle from './FolderTitle';

interface IFolderStructureProps {
    folderData: any;
    openedFileKey: string;
}

const FolderStructure: FC<IFolderStructureProps> = (props) => {
    const { folderData, openedFileKey } = props;
    const data: FolderData = folderData.folderData;

    const isFolderOpened = (folder: any) => {
        if (folder.subFiles && folder.subFiles.some((file: any) => file.key === openedFileKey)) {
            return true;
        }
        if (folder.subFolders) {
            for (const subFolder of folder.subFolders) {
                if (isFolderOpened(subFolder)) {
                    return true;
                }
            }
        }
        return false;
    };

    return (
        <div>
            {
                folderData && data && (
                    <div className='px-4 hover:bg-bg_light_blue'>
                        <FolderTitle
                            type={data?.type}
                            title={data?.label}
                            openedFileKey={openedFileKey}
                            folderKey={data?.key}
                        />
                    </div>
                )
            }
            {
                folderData && data?.subFolders && data?.subFolders?.length > 0 && data?.subFolders?.map((subFolder: any) => {
                    return (
                        <div key={subFolder?.key}>
                            <div key={subFolder?.key} className='hover:bg-bg_light_blue'>
                                <div className='ml-5'>
                                    <FolderTitle
                                        type={subFolder?.type}
                                        title={subFolder?.label}
                                        openedFileKey={openedFileKey}
                                        folderKey={subFolder?.key}
                                    />
                                </div>
                            </div>
                            {
                                subFolder?.subFolders?.length > 0 && subFolder?.subFolders?.map((subsubFolder: any) => (
                                    <div key={subsubFolder?.key} className='hover:bg-bg_light_blue'>
                                        <div className='ml-11'>
                                            <FolderTitle
                                                type={subsubFolder?.type}
                                                title={subsubFolder?.label}
                                                openedFileKey={openedFileKey}
                                                folderKey={subsubFolder?.key}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                subFolder?.subFiles?.length > 0 && subFolder?.subFiles?.map((subsubFiles: any) => (
                                    <div key={subsubFiles?.key} className={`${subsubFiles?.key == openedFileKey ? 'bg-bg_light_blue' : 'bg-transparent'} hover:bg-bg_light_blue`}>
                                        <div className='ml-16'>
                                            <FolderTitle
                                                type={subsubFiles?.type}
                                                title={subsubFiles?.label}
                                                openedFileKey={openedFileKey}
                                                folderKey={subsubFiles?.key}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
            {
                folderData && data?.subFiles && data?.subFiles?.length > 0 && data?.subFiles?.map((subFile: any) => {
                    return (
                        <div key={subFile?.key} className='hover:bg-bg_light_blue'>
                            <div className='ml-10'>
                                <FolderTitle
                                    type={subFile?.type}
                                    title={subFile?.label}
                                    openedFileKey={openedFileKey}
                                    folderKey={subFile?.key}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FolderStructure;