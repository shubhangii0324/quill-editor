'use client'
import ImageIcon from '@/common/ImageIcon';
import React, { FC, useEffect } from 'react';
import { loader } from "@monaco-editor/react";
import CodeHeader from '@/common/CodeHeader';
import { getCodeEditorContent } from '@/utils';
import dynamic from 'next/dynamic';
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface IEditorContentProps {
    handleExpandCollapse: (type: string) => void;
    showLeftSidebar: boolean;
    showRightSidebar: boolean;
}

const EditorContent: FC<IEditorContentProps> = (props) => {
    const { handleExpandCollapse, showLeftSidebar, showRightSidebar } = props;

    useEffect(() => {
        loader.init().then((monaco) => {
            monaco.editor.defineTheme('quillEditorTheme', {
                base: 'vs-dark',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': '#13161A',
                },
            });
        });
    }, []);

    return (
        <div className='relative h-full rounded-[3px] bg-content_background border-0 pb-[18px]'>
            <CodeHeader />
            <div className="flex justify-center items-start pt-4 h-full w-full">
                <div className="w-full h-full">
                    <MonacoEditor
                        height={'70vh'}
                        defaultLanguage={'solidity'}
                        defaultValue={getCodeEditorContent()}
                        theme='quillEditorTheme'
                        options={{
                            minimap: {
                              enabled: false,
                            },
                      }}
                    />
                </div>
            </div>
            <div>
                <button onClick={() => handleExpandCollapse('left')} className='border-none bg-transparent'>
                    <ImageIcon
                        src='/assets/icons/leftCollapse.svg'
                        alt='left-collapse'
                        imgClassName={`absolute -left-2 bottom-4 cursor-pointer ${!showLeftSidebar ? 'transform rotate-180' : ''}`}
                        width={20}
                        height={20}
                    />
                </button>
                <button onClick={() => handleExpandCollapse('right')} className='border-none bg-transparent'>
                    <ImageIcon
                        src='/assets/icons/rightCollapse.svg'
                        alt='right-collapse'
                        imgClassName={`absolute -right-2 bottom-4 cursor-pointer ${!showRightSidebar ? 'transform rotate-180' : ''}`}
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}

export default EditorContent;