import ImageIcon from '@/common/ImageIcon';
import React, { FC } from 'react';

interface IFolderTitleProps {
    type: string;
    title: string;
    folderKey: string;
    openedFileKey: string;
}

const FolderTitle: FC<IFolderTitleProps> = (props) => {
    const { type, title, folderKey, openedFileKey } = props;
    const isOpen = ((folderKey.length === 1 && folderKey === openedFileKey[0]) || (folderKey.length === 3 && folderKey[2] === openedFileKey[2]) || (folderKey.length === 5 && folderKey[4] === openedFileKey[4]));

    return (
        <div className='flex justify-start items-center gap-x-3 py-[10px] cursor-pointer group'>
            {
                type === 'folder' && (
                    isOpen ? (
                        <ImageIcon
                            src='/assets/icons/blueArrow.svg'
                            alt='arrow-icon'
                            width={6}
                            height={10}
                            imgClassName='rotate-90'
                        />
                    ) : (
                        <ImageIcon
                            src='/assets/icons/grayArrow.svg'
                            alt='arrow-icon'
                            width={6}
                            height={10}
                        />
                    )
                )
            }
            {
                type === 'folder' ? (
                    isOpen ? (
                        <ImageIcon
                            src='/assets/icons/blueFolderIcon.svg'
                            alt='folder-icon'
                            width={16}
                            height={14}
                        />
                    )
                        :
                        (
                            <ImageIcon
                                src='/assets/icons/grayFolderIcon.svg'
                                alt='folder-icon'
                                width={16}
                                height={14}
                            />
                        )
                )
                    :
                    (
                        isOpen ? (
                            <ImageIcon
                                src='/assets/icons/blueFileIcon.svg'
                                alt='file-icon'
                                width={12}
                                height={16}
                            />
                        ) : (
                            <ImageIcon
                                src='/assets/icons/grayFileIcon.svg'
                                alt='file-icon'
                                width={12}
                                height={16}
                            />
                        )
                    )
            }
            <span className={`${isOpen ? 'text-blue' : 'text-text_gray'} text-sm leading-[18px] font-normal group-hover:text-blue`}>{title}</span>
        </div>
    )
}

export default FolderTitle;