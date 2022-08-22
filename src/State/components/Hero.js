import Link from 'next/link';
import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Benefits from '../components/Benefits';

import MobileBenefits from '../components/MobileBenefits';
import TabletBenefits from '../components/TabletBenefits';

function getForm(stateName) {
  switch (stateName) {
    case 'indiana':
      return 'https://irvingmaterials.qualtrics.com/jfe/form/SV_8i8dk6iNspBLjro';
    case 'ohio':
      return 'https://irvingmaterials.qualtrics.com/jfe/form/SV_0xO3P97lkAgDxoa';
    case 'kentucky':
      return 'https://irvingmaterials.qualtrics.com/jfe/form/SV_73z4Z2fHHtwUvIy';
    case 'tennessee':
      return 'https://irvingmaterials.qualtrics.com/jfe/form/SV_3jFld8v4SoJyEOG';
    default:
      return '';
  }
}

const Hero = ({ state, name, setNextLink }) => {
  const router = useRouter();
  function getRoute() {
    return router?.route.replace('/', '').trim();
  }
  return (
    <React.Fragment>
      <div className={'hero'}>
        <Header
          as='h1'
          className={'cta'}
          style={{
            fontSize: '80px',
            fontWeight: 'bolder',
            lineHeight: '1.2',
            position: 'absolute',
            color: '#fff',
            marginLeft: '40px',
            top: 190,
            textShadow: '-3px 5px 4px #69696942',
          }}
        >
          A career at imi is&nbsp;more<br></br>than a&nbsp;job.
          <br></br>
          <Button
            onClick={() => setNextLink(getForm(getRoute()))}
            className='heroBtn'
            size='huge'
            style={{ backgroundColor: '#ea0029', color: '#fff' }}
          >
            Sign Up For Alerts
          </Button>
        </Header>

        {/* <Button
          className={'heroBtn tablet'}
          color='black'
          size='massive'
          style={{ margin: '0 auto', maxWidth: '300px', marginTop: '420px' }}
        >
          Sign Up For Alerts
        </Button> */}
        <Benefits state={state} name={name} />
      </div>
      <TabletBenefits state={state} name={name} />
      <MobileBenefits state={state} name={name} />
    </React.Fragment>
  );
};

export default Hero;
