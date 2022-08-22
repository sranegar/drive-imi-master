import React from 'react';
import Head from 'next/head';
import State from '../components/StateLayout';

const Ohio = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Drive imi - Ohio</title>
      </Head>
      <State state='Ohio' name='Ohio' stateName='ohio' />
    </React.Fragment>
  );
};

export default Ohio;
