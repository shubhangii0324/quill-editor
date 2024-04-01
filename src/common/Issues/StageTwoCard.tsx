import ImageIcon from '@/common/ImageIcon';
import React, { FC } from 'react';

interface IStageTwoCardProps {
    issue: any;
    handleIssueChange: (type: number, data: any) => void;
}

const StageTwoCard: FC<IStageTwoCardProps> = (props) => {
    const { issue, handleIssueChange } = props;

    return (
        <div onClick={(data) => handleIssueChange(3, data)} className='relative flex justify-start items-center px-5 gap-x-3 min-h-[46px] bg-dark_gray mx-3 rounded'>
            <div className='flex items-center justify-start gap-x-2'>
                <span className='text-sm text-text_gray leading-[18px] font-normal'>{`#${issue.id}.`}</span>
                <span className='text-text_gray text-sm leading-[18px] font-normal mr-10'>{issue.title}</span>
            </div>
            <div className='border-0 h-full border-r border-solid border-border_color' />
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

export default StageTwoCard;