import React from 'react';
import { Grid, Image, Segment, Header, Button, Divider } from 'semantic-ui-react';
import Imi from '../../../public/imi.png';
import DriverImg from '../../../public/fred-driverSq.jpg';

// import VideoIndiana from '../../../public/IMI_05192022_Cymone Horton_Ext_Indiana.mp4';
// import VideoOhio from '../../../public/IMI_05192022_Cymone Horton_Ext_Ohio.mp4';
// import VideoKentucky from '../../../public/IMI_05192022_Cymone Horton_Ext_Kentucky.mp4';
// import VideoTennessee from '../../../public/IMI_05192022_Cymone Horton_Ext_Tennessee.mp4';

const BodyTwo = ({ careerLink, state }) => {
  // function getVideoSrc() {
  //   let stateName = '';
  //   if (typeof window !== 'undefined') {
  //     stateName = window.location.pathname.replace('/', '');
  //   }
  //   switch (stateName) {
  //     case 'indiana':
  //       return require('../../../public/IMI_05192022_Cymone Horton_Ext_Indiana.mp4');
  //     case 'ohio':
  //       return require('../../../public/IMI_05192022_Cymone Horton_Ext_Ohio.mp4');
  //     case 'kentucky':
  //       return require('../../../public/IMI_05192022_Cymone Horton_Ext_Kentucky.mp4');
  //     case 'tennessee':
  //       return require('../../../public/IMI_05192022_Cymone Horton_Ext_Tennessee.mp4');
  //     default:
  //       return '';
  //   }
  // }

  function getIndeedListing(stateName) {
    return `https://www.indeed.com/cmp/Irving-Materials-Inc./jobs?q=&l=${stateName}`;
  }

  return (
    <React.Fragment>
      <Segment
        style={{
          maxHeight: '1100px',
        }}
        basic
      >
        <Divider className='mobile' />
        <Header as='h1' style={{ marginLeft: '30px', marginTop: '100px' }} className='desktop'>
          EXPLORE CAREER OPPORTUNITIES
        </Header>
        <Header as='h1' style={{ marginLeft: '30px', marginTop: '60px' }} className='tablet'>
          EXPLORE CAREER OPPORTUNITIES
        </Header>
        <Grid centered stackable columns={3} verticalAlign='middle' padded>
          <Grid.Row style={{ padding: '2% 0%' }}>
            <Grid.Column width={6}>
              <Grid className=' desktop' style={{ paddingRight: '16px' }}>
                <Grid.Column>
                  <Grid columns={1} style={{ minHeight: '200px', marginLeft: '10px' }} verticalAlign='middle'>
                    <Grid.Column>
                      <Image src={Imi.src} style={{ width: '150px' }} alt='imi-logo' />
                    </Grid.Column>
                  </Grid>
                  {/* <Grid.Column style={{ minHeight: '85px' }}>
                    <Grid columns='1' verticalAlign='middle' style={{ marginLeft: '10px' }}>
                      <Grid.Column verticalAlign='middle'>
                        <Header as='h2'>Concrete</Header>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column> */}
                  <Grid.Column style={{ minHeight: '150px' }} color='red'>
                    <Segment basic style={{ fontSize: '18px' }}>
                      Drive a ready-mix truck, work as a plant manager, dispatch jobs, operate heavy-machinery, work in sales, be
                      a mechanic, and so much more!
                    </Segment>
                  </Grid.Column>
                  <Grid.Row>
                    <Grid.Column style={{ marginLeft: '10px' }}>
                      <Button
                        className={'bodyPrimaryBtn'}
                        size='large'
                        content='Careers'
                        as='a'
                        href={getIndeedListing(state)}
                        // href={`https://www.irvmat.com/careers.asp${careerLink ? '#' + careerLink : ''}`}
                        style={{
                          backgroundColor: '#ea0029',
                          color: '#fff',
                          width: '140px',
                        }}
                      />
                      <Button
                        as='a'
                        href='https://www.irvmat.com/'
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
                </Grid.Column>
              </Grid>

              <Grid textAlign='center' className='tablet'>
                <Grid.Column>
                  <Grid columns={1} style={{ minHeight: '150px' }} verticalAlign='middle'>
                    <Grid.Column>
                      <Image centered src={Imi.src} style={{ width: '140px' }} alt='imi-logo' />
                    </Grid.Column>
                  </Grid>
                  {/* <Grid.Column style={{ minHeight: '85px' }}>
                    <Grid columns='1' verticalAlign='middle' style={{ marginLeft: '10px' }}>
                      <Grid.Column verticalAlign='middle'>
                        <Header as='h2'>Concrete</Header>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column> */}
                  <Grid.Column style={{ minHeight: '150px' }}>
                    <Segment basic textAlign='left' style={{ fontSize: '18px' }}>
                      Drive a ready-mix truck, work as a plant manager, dispatch jobs, operate heavy-machinery, work in sales, be
                      a mechanic, and so much more!
                    </Segment>
                  </Grid.Column>
                  <Grid.Row style={{ paddingBottom: '5%' }}>
                    <Grid.Column width={8}>
                      <Button
                        className={'bodyPrimaryBtn'}
                        size='large'
                        content='Careers'
                        as='a'
                        href={getIndeedListing(state)}
                        // href={`https://www.irvmat.com/careers.asp${careerLink ? '#' + careerLink : ''}`}
                        style={{
                          backgroundColor: '#ea0029',
                          color: '#fff',
                          width: '140px',
                          marginBottom: '5px',
                        }}
                      />
                      <Button
                        as='a'
                        href='https://www.irvmat.com/'
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
                </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column width={6} style={{ padding: '10px' }} verticalAlign='middle' className='desktop'>
              <Image circular centered src={DriverImg.src} style={{ maxHeight: '550px' }} alt='driver' />
              {/* <video controls style={{ width: '100%' }} src={getVideoSrc()}></video> */}
            </Grid.Column>

            <Grid.Column width={6} verticalAlign='middle' className='tablet'>
              <Image circular centered src={DriverImg.src} style={{ maxHeight: '460px' }} alt='driver' />
              {/* <video controls style={{ width: '100%' }} src={getVideoSrc()}></video> */}
            </Grid.Column>

            <Grid centered divided stackable className='mobile' style={{ padding: '0px 40px 50px 40px' }}>
              <Grid.Column>
                <Grid columns={1} style={{ minHeight: '200px' }} verticalAlign='middle'>
                  <Grid.Column>
                    <Image centered src={Imi.src} style={{ width: '150px' }} alt='imi-logo' />
                  </Grid.Column>
                </Grid>
                {/* <Grid.Column style={{ minHeight: '85px' }}>
                  <Grid columns='1' centered verticalAlign='middle'>
                    <Grid.Column verticalAlign='middle'>
                      <Header as='h2'>Concrete</Header>
                    </Grid.Column>
                  </Grid>
                </Grid.Column> */}
                <Grid.Column style={{ minHeight: '200px' }}>
                  <Grid columns='1'>
                    <Grid.Column verticalAlign='middle'>
                      <Segment basic style={{ fontSize: '18px' }}>
                        Drive a ready-mix truck, work as a plant manager, dispatch jobs, operate heavy-machinery, work in sales,
                        be a mechanic, and so much more!
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>

                <Grid.Row>
                  <Grid.Column style={{ textAlign: 'center' }}>
                    <Button
                      className={'bodyPrimaryBtn'}
                      size='large'
                      content='Careers'
                      as='a'
                      href={getIndeedListing(state)}
                      // href={`https://www.irvmat.com/careers.asp${careerLink ? '#' + careerLink : ''}`}
                      style={{
                        backgroundColor: '#ea0029',
                        color: '#fff',
                        width: '140px',
                      }}
                    />
                    <Button
                      as='a'
                      href='https://www.irvmat.com/'
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
              </Grid.Column>
            </Grid>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default BodyTwo;
