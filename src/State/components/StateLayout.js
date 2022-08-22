import React, { useState } from 'react';
import Hero from './Hero';
import { Confirm } from 'semantic-ui-react';

// import Body from './Body';

import Navigation from './Navigation';
import Footer from './Footer';
import Banner from './Banner';
import Testimonials from './Testimonials';

import BodyTwo from './BodyTwo';

const State = ({ state, name, stateName }) => {
  const [nextLink, setNextLink] = useState(null);

  return (
    <React.Fragment>
      {nextLink ? (
        <Confirm
          onCancel={() => setNextLink(null)}
          onConfirm={() => {
            window.open(nextLink, '_blank');
            setNextLink(null);
          }}
          open={true}
          content='You are leaving driveimi.com and going to an imi form hosted by Qualtrics.'
        />
      ) : undefined}
      <Navigation stateName={stateName} setNextLink={setNextLink} />
      <Hero state={state} name={name} setNextLink={setNextLink} />

      {/* {isIndiana ? <Body /> : <BodyTwo />} */}
      {/* <Body /> */}
      <BodyTwo state={state} />
      <Banner setNextLink={setNextLink} />
      <Testimonials stateName={stateName} state={state} />
      <Footer setNextLink={setNextLink} />
    </React.Fragment>
  );
};

export default State;
