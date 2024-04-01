import React, { FC } from 'react';
import StageTwoCard from '../Issues/StageTwoCard';


interface ITypeIssuesProps {
    typeIssues: any;
    handleIssueChange: (type: number, data: any) => void;
}

const TypeIssues: FC<ITypeIssuesProps> = (props) => {
    const { typeIssues, handleIssueChange } = props;

    return (
        <div className='h-full rounded-[3px] bg-content_background flex flex-col justify-start pb-4'>
            <div className='h-[60px] bg-[#1E232B] flex justify-between items-center px-8 py-2 mx-3 mt-5 rounded-[3px]'>
                <div className='flex justify-start items-center gap-x-3'>
                    <div className='w-[10px] h-[10px] rounded-full bg-status_orange' />
                    <span className='text-[28px] leading-9 tracking-wider font-bold text-[#EEEEEE]'>{typeIssues?.issues}</span>
                </div>
                <div className='border-1 border-r border-border_color h-full' />
                <div className='flex justify-between'>
                    <span className='text-sm font-medium leading-[18px] text-[#AAAAAA]'>{typeIssues?.title}</span>
                </div>
            </div>
            <div className='flex flex-col px-4 mt-5'>
                <span className='text-[#EEEEEE] text-sm leading-[18px] font-medium'>List of Issues</span>
                <div className='border-1 border-b border-border_color w-full my-3' />
            </div>
            <div className='flex flex-col gap-y-2 max-h-[350px] overflow-hidden overflow-y-scroll'>
                {
                    typeIssues && typeIssues.subIssues?.length > 0 && typeIssues.subIssues.map((issue: any) => (
                        <div key={issue.id}>
                            <StageTwoCard
                                handleIssueChange={(type) => handleIssueChange(type, issue)}
                                issue={issue}
                            />
                        </div>
                    ))
                }
            </div>
            <div className='px-4 mt-5'>
                <div className='flex justify-start gap-x-2 items-center'>
                    <input className='w-[18px] h-[18px] cursor-pointer' type="checkbox" id="exclude" name="exclude" value="exclude" />
                    <label htmlFor='exclude' className='text-sm text-[#EEEEEE] leading-[18px] font-semibold'>Exclude Dependencies</label>
                </div>
            </div>
        </div>
    )
}

export default TypeIssues;