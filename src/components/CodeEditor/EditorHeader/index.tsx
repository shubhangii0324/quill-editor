import ImageIcon from '@/common/ImageIcon';
import React, { FC } from 'react';

interface IEditorHeaderProps { }

const EditorHeader: FC<IEditorHeaderProps> = () => {
    return (
        <div className='w-full h-[54px] border-0 flex justify-between pt-[6px] pb-[18px] border-b border-solid border-border_color'>
            <div className='flex justify-start items-center gap-x-2'>
                <ImageIcon
                    src='/assets/icons/file-icon.svg'
                    alt='file-icon'
                    imgClassName='cursor-pointer'
                    width={37}
                    height={41}
                />
                <h6 className='text-2xl font-bold text-white'>Sample Project</h6>
            </div>
            <div className='flex justify-end items-center gap-x-3'>
                <button className='bg-blue px-8 py-[10px] rounded-[3px] text-white text-sm font-bold leading-[18px]'>Audit Now</button>
                <button className='relative bg-light_blue px-8 py-[10px] rounded-[3px] text-blue text-sm font-semibold leading-[18px]'>
                    Options
                    <span className='bg-orange rounded-full absolute -top-[3px] -right-[3px] w-[10px] h-[10px]'></span>
                </button>
            </div>
        </div>
    )
}

export default EditorHeader;