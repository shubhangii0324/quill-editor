'use client'
import { IssueData } from '@/types';
import React, { FC, useState } from 'react';
import StageOneCard from '../Issues/StageOneCard';


interface IAllIssuesProps {
    allIssues: IssueData;
    handleIssueChange: (type: number, data: any) => void;
}

const AllIssues: FC<IAllIssuesProps> = (props) => {
    const { allIssues, handleIssueChange } = props;
    const [selectedTab, setSelectedTab] = useState('current');

    return (
        <div className='h-full rounded-[3px] bg-content_background flex flex-col justify-start'>
            <div className='h-10 bg-[#1E232B] flex justify-between p-1 mx-3 mt-5 rounded-[3px]'>
                <button className={`w-full rounded-[3px] text-sm font-bold leading-[18px] transition-all duration-300 left-0 ${selectedTab === 'current' ? 'bg-blue text-white' : 'bg-transparent text-gray'}`} onClick={() => setSelectedTab('current')}>Current File</button>
                <button className={`w-full rounded-[3px] text-sm font-bold leading-[18px] transition-all duration-300 left-0 ${selectedTab === 'full' ? 'bg-blue text-white' : 'bg-transparent text-gray'}`} onClick={() => setSelectedTab('full')}>Full Project</button>
            </div>
            <div className='flex flex-col gap-y-2 mt-5'>
                {
                    allIssues && allIssues.issues?.length > 0 && allIssues.issues.map((issue: any) => {
                        return (
                            <div key={issue.id}>
                                <StageOneCard
                                    color={issue.color}
                                    title={issue.title}
                                    issues={issue.issues}
                                    handleIssueChange={(type) => handleIssueChange(type, issue)}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className='px-4'>
                <div className='border-1 border-b border-border_color w-full mt-7 mb-4' />
                <div className='flex justify-start gap-x-2 items-center'>
                    <input className='w-[18px] h-[18px] cursor-pointer' type="checkbox" id="exclude" name="exclude" value="exclude" />
                    <label htmlFor='exclude' className='text-sm text-[#EEEEEE] leading-[18px] font-semibold'>Exclude Dependencies</label>
                </div>
            </div>
        </div>
    )
}

export default AllIssues;