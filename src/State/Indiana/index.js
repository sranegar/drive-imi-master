import React from 'react';
import Head from 'next/head';
import State from '../components/StateLayout';

const Indiana = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Drive imi - Indiana</title>
      </Head>
      <State state='Indiana' name='Indiana' stateName='indiana' />
    </React.Fragment>
  );
};

export default Indiana;
