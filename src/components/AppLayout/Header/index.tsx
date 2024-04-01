'use client'
import ImageIcon from '@/common/ImageIcon';
import React, { FC, useState } from 'react';

interface IHeaderProps {
    menuItems: any;
}

const Header: FC<IHeaderProps> = (props) => {
    const { menuItems } = props;
    const [selectedMenuItem, setSelectedMenuItem] = useState(1);
    return (
        <div className='bg-dark_gray w-full h-14 flex justify-between items-center'>
            <div className='px-9 py-3 cursor-pointer flex justify-start border-1 border-r border-solid border-border_color'>
                <ImageIcon
                    src='/assets/logo.svg'
                    alt='logo'
                    width={128}
                    height={28}
                />
            </div>
            <div className='flex justify-end items-center'>
                <div className='flex justify-end gap-x-8 items-center mr-10'>
                    {
                        menuItems && menuItems?.menuItems?.length > 0 && menuItems?.menuItems?.map((item: any) => (
                            <div className='flex flex-col group items-center transition ease-in-out delay-150 ' key={item.key} onClick={() => setSelectedMenuItem(item.key)}>
                                <span className={`text-sm font-medium leading-[18px] mb-1 group-hover:text-blue cursor-pointer ${selectedMenuItem === item.key ? 'text-blue' : 'text-gray'}`}>{item.label}</span>
                                <div className={`border-2 rounded-sm min-w-6 border-b border-solid group-hover:border-blue  ${selectedMenuItem === item.key ? 'border-blue' : 'border-dark_gray'}`} />
                            </div>
                        ))
                    }
                </div>
                <div className='flex cursor-pointer items-center gap-x-3 justify-end pl-5 pr-6 py-3 border-1 border-l border-solid border-border_color'>
                    <ImageIcon
                        src='/assets/icons/avatar.svg'
                        alt='avatar-icon'
                        width={28}
                        height={28}
                    />
                    <span className='text-sm leading-[18px] font-semibold text-white mr-4'>Johnny Doe</span>
                    <ImageIcon
                        src='/assets/icons/dropdown.svg'
                        alt='dropdown-icon'
                        width={14}
                        height={7}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;