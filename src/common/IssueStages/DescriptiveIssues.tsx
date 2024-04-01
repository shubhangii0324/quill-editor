import React, { FC } from 'react';
import ImageIcon from '../ImageIcon';


interface IDescriptiveIssuesProps {
    issue: any;
    showLeftSidebar: boolean;
    showRightSidebar: boolean;
}

const DescriptiveIssues: FC<IDescriptiveIssuesProps> = (props) => {
    const { issue, showLeftSidebar, showRightSidebar } = props;

    return (
        <div className='h-full rounded-[3px] bg-content_background flex flex-col justify-start pb-4'>
            <div className='min-h-[46px] bg-[#1E232B] flex justify-between items-center px-4 py-2 mx-3 mt-5 rounded-[3px]'>
                <div className='flex justify-start items-center gap-x-3'>
                    <div className='w-[10px] h-[10px] rounded-full bg-status_orange' />
                    <span className='text-sm font-medium leading-[18px] text-[#CCCCCC]'>{`#${issue?.id}.`}</span>
                    <span className='text-sm font-medium leading-[18px] text-[#CCCCCC]'>{issue?.title}</span>
                </div>
            </div>
            <div className={`relative flex flex-col gap-y-2 mt-5 w-full bg-[#1E232B] rounded-[3px] mx-3 py-4 px-4 ${(showLeftSidebar && showRightSidebar) ? 'max-w-[310px]' : 'max-w-[430px]'}`}>
                <div className='max-h-[420px] overflow-hidden overflow-y-scroll'>
                    <h6 className='text-blue text-sm font-bold leading-[18px]'>Description:</h6>
                    <span className='text-[#CCCCCC] text-sm font-normal leading-[18px]'>{issue?.description}</span>
                    <h6 className='text-blue text-sm font-bold leading-[18px]'>Remediation:</h6>
                    <span className='text-[#CCCCCC] text-sm font-normal leading-[18px]'>{issue?.remidiation}</span>
                </div>
                <div className='flex flex-col absolute bottom-0 bg-[#1E232B] w-[95%]'>
                    <div className='border-1 border-b border-border_color w-full' />
                    <div className='flex justify-end w-full gap-x-3 my-3 px-3'>
                        <button className='bg-blue w-[153px] h-9 radius-[3px] text-sm font-bold leading-[18px] text-white'>Auto Fix Code</button>
                        <ImageIcon src='/assets/icons/redFlag.svg' alt='red-flag' imgClassName='cursor-pointer' height={36} width={36} />
                    </div>
                </div>
            </div>
            <div className='px-4 mt-3'>
                <div className='flex justify-start gap-x-2 items-center'>
                    <ImageIcon src='/assets/icons/infoIcon.svg' alt='info-icon' width={12} height={12} />
                    <span className='text-[#EEEEEE] text-xs font-medium leading-4'>Changes done in the code can be undone.</span>
                </div>
            </div>
        </div>
    )
}

export default DescriptiveIssues;