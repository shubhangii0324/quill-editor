import Breadcrumb from '@/common/Breadcrumb';
import { NextComponentType, NextPageContext } from 'next';
import React, { FC } from 'react';
import Header from './Header';
import menuItems from '../../data/menuItems.json'

interface IAppLayoutProps {
  Component: NextComponentType<NextPageContext>;
  pageProps: any;
}

const AppLayout: FC<IAppLayoutProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
    <div className='hidden md:grid grid-flow-row m-3'>
      <Header menuItems={menuItems} />
      <Breadcrumb type='main' />
      <Component {...pageProps} />
    </div>
    <div className='flex md:hidden justify-between items-center text-white font-bold text-2xl w-full h-screen text-center bg-content_background'>For optimal enjoyment, I recommend using this on a web browser!</div>
    </>
  )
}

export default AppLayout;