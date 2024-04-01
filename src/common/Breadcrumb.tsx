import { getLinkAndTitle } from '@/utils';
import React, { FC } from 'react';

interface IBreadcrumbProps {
    type: string;
    issue?: string;
    issueCount?: number;
}

const Breadcrumb: FC<IBreadcrumbProps> = (props) => {
    const { type, issue, issueCount } = props;
    const data = getLinkAndTitle(type, issue, issueCount);
    return (
        <div className={`bg-transparent mx-1 w-full flex justify-start items-center gap-x-[6px] font-medium leading-4 ${type === 'sidebar' ? 'text-sm' : 'text-xs mt-4'}`}>
            <span className={`${(!data.subLink && !data.title) ? 'text-[#CCCCCC]' : 'text-light_gray'}`}>{data.link}</span>
            {
                data.subLink && <span className='text-light_gray'>/</span>
            }
            <span className={`${(!data.title) ? 'text-[#CCCCCC]' : 'text-light_gray'}`}>{data.subLink}</span>
            {
                data.title && <span className='text-light_gray'>/</span>
            }
            <span className='text-white'>{data.title}</span>
        </div>
    )
}

export default Breadcrumb;