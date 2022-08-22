import Head from 'next/head';
import React from 'react';
import { Form } from 'semantic-ui-react';
import Link from 'next/link';
import imiTruck from '../../public/poster-truck.png';
import Navigation from '../State/components/Navigation';
import Footer from '../State/components/Footer';

const Home = ({ stateName, state }) => {
  const [selectedState, setSelectedState] = React.useState('');

  const isLandingPage = true;

  function changeState(e, { value }) {
    setSelectedState(value);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Drive imi</title>
      </Head>
      <Navigation isLandingPage={isLandingPage} stateName={stateName} />
      <div
        className='landingHero'
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPositionY: '50%',
          backgroundImage: `linear-gradient(rgba(0,0,0,.16), rgba(0,0,0,.16)), url(${imiTruck.src})`,
          display: 'flex',
          // alignItems: 'center',
          padding: '40px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 220 }} className='landingWrapper'>
          <h1
            className='tablet-desktop landingCta'
            style={{ color: 'white', fontSize: '80px', textShadow: '-3px 4px 5px #69696942' }}
          >
            Select your state
          </h1>
          <h1 className='mobile' style={{ color: 'white', fontSize: '46px', lineHeight: '1.1' }}>
            Select your state
          </h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Dropdown
                clearable
                selection
                placeholder='Select a state...'
                value={selectedState}
                onChange={changeState}
                options={[
                  { text: 'Indiana', value: 'indiana' },
                  { text: 'Kentucky', value: 'kentucky' },
                  { text: 'Ohio', value: 'ohio' },
                  { text: 'Tennessee', value: 'tennessee' },
                ]}
              />
              <Form.Field>
                {selectedState ? (
                  <>
                    <div className='tablet-desktop'>
                      <Link href={`/${selectedState}`}>
                        <a
                          className='ui fluid button landingBtn'
                          style={{ backgroundColor: '#ea0029', color: 'white' }}
                          children='Search Careers'
                        />
                      </Link>
                    </div>
                    <div className='mobile'>
                      <Link href={`/${selectedState}`}>
                        <a
                          className='ui button fluid landingBtn'
                          style={{ backgroundColor: '#ea0029', color: 'white' }}
                          children='Search Careers'
                        />
                      </Link>
                    </div>
                  </>
                ) : null}
              </Form.Field>
            </Form.Group>
          </Form>
        </div>
      </div>
      <Footer stateName={stateName} state={state} />
    </React.Fragment>
  );
};

export default Home;
