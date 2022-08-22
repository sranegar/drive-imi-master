import React from 'react';
import Head from 'next/head';
import State from '../components/StateLayout';

const Tennessee = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Drive imi - Tennessee</title>
      </Head>
      <State state='Tennessee' name='Tennessee' stateName='tennessee' />
    </React.Fragment>
  );
};

export default Tennessee;
