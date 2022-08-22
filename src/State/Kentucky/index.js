import React from 'react';
import Head from 'next/head';
import State from '../components/StateLayout';

const Kentucky = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Drive imi - Kentucky</title>
      </Head>
      <State state='Kentucky' name='Kentucky' stateName='kentucky' />
    </React.Fragment>
  );
};

export default Kentucky;
