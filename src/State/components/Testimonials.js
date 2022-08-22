import React from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';
import driverDan from '../../../public/driverQuotePhoto.jpg';

const Testimonials = () => {
  return (
    <React.Fragment>
      <Segment basic>
        <Grid
          verticalAlign='middle'
          style={{
            // backgroundColor: "pink",
            padding: '145px 10px',
            maxHeight: '750px',
          }}
        >
          <Grid.Row>
            <Grid.Column>
              <Header
                className='testimonialQuote'
                style={{
                  textAlign: 'center',
                  lineHeight: '1.2',
                  fontSize: '26px',
                  fontStyle: 'italic',
                  margin: '0 auto',
                  maxWidth: '900px',
                  fontWeight: 'lighter',
                }}
              >
                {' '}
                “I chose to work for imi because they always strive to take care of their customers and their employees. People
                stay because of the great pay, great benefits for your family ... it's just a great place to&nbsp;work.”
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            textAlign='center'
            verticalAlign='middle'
            style={{
              maxWidth: '290px',
              margin: '0 auto',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
            }}
          >
            <Image centered src={driverDan.src} avatar size='tiny' />

            <Grid.Column textAlign='left' style={{ minWidth: '140px' }}>
              <Header style={{ fontWeight: 'lighter' }}>- Dan Melvin</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default Testimonials;
