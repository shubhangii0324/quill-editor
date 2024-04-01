import ImageIcon from '@/common/ImageIcon';
import React, { FC } from 'react';

interface IStageOneCardProps {
    color: string;
    title: string;
    issues: string;
    handleIssueChange: (type: number, data: any) => void;
}

const StageOneCard: FC<IStageOneCardProps> = (props) => {
    const { color, title, issues, handleIssueChange } = props;
    const bgColor = `var(--status_${color})`;

    return (
        <div onClick={(data) => handleIssueChange(2, data)} className='relative flex justify-start items-center px-5 gap-x-3 py-3 h-[60px] bg-dark_gray mx-3 rounded'>
            <div className='flex items-center min-w-[100px] max-w-[100px] justify-center'>
                <div className='w-[10px] h-[10px] rounded-full' style={{ backgroundColor: bgColor }} />
                <span className='text-[28px] w-20 text-white leading-9 font-bold tracking-wider ml-4'>{issues}</span>
            </div>
            <div className='border-0 h-full border-r border-solid border-border_color' />
            <span className='text-text_gray text-sm leading-[18px] font-normal mr-10'>{title}</span>
            <ImageIcon
                src='/assets/icons/issueArrow.svg'
                alt='issue-arrow'
                imgClassName='absolute right-6 cursor-pointer'
                width={7}
                height={14}
            />
        </div>
    )
}

export default StageOneCard;