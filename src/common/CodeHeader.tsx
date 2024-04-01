import React, { FC } from 'react';

interface ICodeHeaderProps {
}

const CodeHeader: FC<ICodeHeaderProps> = () => {

    return (
        <div className='h-10 bg-[rgb(30,35,43)] w-full flex justify-start'>
            <button className='bg-blue min-w-40 rounded-t text-white flex justify-between items-center gap-x-4 px-5 whitespace-nowrap'>Example File 1 <span>x</span></button>
            <div className='border-1 border-r border-border_color' />
            <button className='bg-transparent hover:bg-blue transition-all duration-300 min-w-40 rounded-t text-gray hover:text-white flex justify-between items-center gap-x-4 px-5 whitespace-nowrap'>Example Folder <span>x</span></button>
            <div className='border-1 border-r border-border_color' />
            <button className='bg-transparent hover:bg-blue transition-all duration-300 min-w-40 rounded-t text-gray hover:text-white flex justify-between items-center gap-x-4 px-5 whitespace-nowrap'>File 123 <span>x</span></button>
            <div className='border-1 border-r border-border_color' />
            <button className='bg-transparent hover:bg-blue transition-all duration-300 min-w-40 rounded-t text-gray hover:text-white flex justify-between items-center gap-x-4 px-5 whitespace-nowrap'>Sample File<span>x</span></button>
            <div className='border-1 border-r border-border_color' />
        </div>
    )
}

export default CodeHeader;