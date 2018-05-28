import React from 'react';
import { Grommet } from 'grommet';
// import { materiallight } from 'grommet-controls/themes';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = props => (
  <Grommet>
    <Head>
      <title>Horizontal Working</title>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </Grommet>
);

export default Layout;
