import React from 'react';
import Link from 'next/link';
import { Grid, Button, Header, Segment, Image } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import desktopBanner from '../../../public/desktopBanner.png';
import mobileBanner from '../../../public/mobileBanner.png';
import tabletBanner from '../../../public/tabletBanner.png';

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

const Banner = ({ setNextLink }) => {
  const router = useRouter();
  function getRoute() {
    return router?.route.replace('/', '').trim();
  }

  return (
    <React.Fragment>
      <Segment basic>
        <Grid
          style={{
            maxHeight: '450px',
            backgroundColor: '#ea0029',
            textAlign: 'center',
            padding: '4%',
          }}
        >
          <Grid.Row>
            <Grid.Column>
              <Header
                style={{
                  paddingBottom: '2%',
                }}
              >
                {' '}
                <Image
                  className='desktop'
                  centered
                  src={desktopBanner.src}
                  style={{ width: '900px' }}
                  alt='Were proud of our work'
                />
                <Image
                  className='tablet'
                  centered
                  src={tabletBanner.src}
                  style={{ width: '500px' }}
                  alt='Were proud of our work'
                />
                <Image
                  className='mobile'
                  centered
                  src={mobileBanner.src}
                  style={{ width: '200px' }}
                  alt='Were proud of our work'
                />
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button
                onClick={() => setNextLink(getForm(getRoute()))}
                className={'bannerBtn'}
                size='huge'
                style={{ backgroundColor: '#fff', color: '#000' }}
                content='Sign Up For Alerts'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default Banner;
