import React from 'react';
import { Grid, Image, Segment, Header, Button, Divider } from 'semantic-ui-react';
import Specialties from '../../../public/Specialties.png';
import EB from '../../../public/EB.png';
import Imi from '../../../public/imi.png';

const CustomColumn = ({ image, header, body, alt, children, learnMore, careerLink }) => {
  return (
    <Grid.Column style={{ paddingBottom: '90px' }}>
      <Grid columns={1} className='bodyColumn'>
        <Grid.Column>
          <Grid columns={1} style={{ minHeight: '200px' }} verticalAlign='middle'>
            <Grid.Column>
              <Image centered src={image} style={{ width: '150px' }} alt={alt} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column textAlign='center' style={{ minHeight: '85px' }}>
          <Grid columns='1' verticalAlign='middle'>
            <Grid.Column verticalAlign='middle'>
              <Header as='h2'>{header}</Header>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column style={{ minHeight: '150px' }}>
          <Segment basic style={{ fontSize: '18px' }}>
            {body || children}
          </Segment>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button
              className={'bodyPrimaryBtn'}
              size='large'
              content='Careers'
              as='a'
              href={`https://www.irvmat.com/careers.asp${careerLink ? '#' + careerLink : ''}`}
              style={{
                backgroundColor: '#ea0029',
                color: '#fff',
                width: '140px',
              }}
            />
            <Button
              as='a'
              href={learnMore}
              target='_blank'
              rel='noreferrer'
              size='large'
              content='About Us'
              color='red'
              style={{
                width: '140px',
                backgroundColor: '#fff',
                color: '#ea0029',
                border: '1px solid #ea0029',
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Column>
  );
};

const Body = () => {
  return (
    <React.Fragment>
      <Segment
        style={{
          minHeight: '700px',
        }}
        basic
      >
        <Header
          as='h1'
          style={{ marginTop: '100px', marginLeft: '30px', paddingBottom: '30px' }}
          className='bodyHeader tablet-desktop'
        >
          EXPLORE CAREER OPPORTUNITIES
        </Header>
        <Divider className='mobile' />
        <Grid centered doubling stackable divided columns={3}>
          <Grid.Row>
            <CustomColumn learnMore='https://www.irvmat.com/' image={Imi.src} header='Concrete & Aggregate' alt='imi'>
              Drive a ready-mix truck, work as a plant manager, dispatch jobs, operate heavy-machinery, work in sales, be a
              mechanic, and so much more!
            </CustomColumn>

            <CustomColumn learnMore='https://ebpaving.com/' image={EB.src} header='E&B Paving' alt='E&B Paving'>
              Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis.
            </CustomColumn>

            <CustomColumn
              learnMore='https://www.specialtiescompany.com/'
              image={Specialties.src}
              header='Specialized Construction Services'
              alt='Specialties Company'
            >
              Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
              quia dolor.
            </CustomColumn>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default Body;
