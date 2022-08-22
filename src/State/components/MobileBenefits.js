import React from 'react';
import { Grid, Icon, Header, Segment } from 'semantic-ui-react';

const CustomMobileBenefits = ({ icon, name, header, description, body, children }) => {
  return (
    <Grid.Column>
      <Icon className={icon} name={name} size='huge'></Icon>
      <Header as='h3' style={{ minHeight: '20px' }}>
        {header}
      </Header>
      <Segment className={description} basic style={{ fontSize: '18px' }}>
        {body || children}
      </Segment>
    </Grid.Column>
  );
};

const MobileBenefits = ({ state, name }) => {
  const salaryAmount = state === 'Indiana' ? '$65,000' : '$60,000';
  const stateName = state === name ? name : undefined;

  return (
    <React.Fragment>
      <Grid stackable className={'mobile'} columns={4} textAlign='center' style={{ padding: '40px 0px' }}>
        {' '}
        <Header as='h1' style={{ padding: '10px 0px 20px 0px', fontSize: '26px' }}>
          EXPLORE DRIVER BENEFITS
        </Header>
        <Grid.Row textAlign='center' style={{ padding: '0 30px' }}>
          <Grid.Column>
            <Icon name='home' size='huge'></Icon>
            <Header as='h3' style={{ minHeight: '20px', whiteSpace: 'nowrap' }}>
              Home Every Night
            </Header>
            <Segment basic style={{ fontSize: '18px' }}>
              Deliver in the communities near your plant and come home every night.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon name='dollar sign' size='huge'></Icon>
            <Header as='h3' style={{ minHeight: '20px' }}>
              Compensation
            </Header>
            <Segment basic style={{ fontSize: '18px' }}>
              {`On average, full time drivers in ${stateName} earn ${salaryAmount} annually.`}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon name='plus square outline' size='huge'></Icon>
            <Header as='h3' style={{ minHeight: '20px' }}>
              Health Benefits
            </Header>
            <Segment basic style={{ fontSize: '18px' }}>
              Exceptional coverage for you and your family with low premiums.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon className='icon' name='chart line' size='huge'></Icon>
            <Header as='h3' style={{ minHeight: '20px' }}>
              Career Growth
            </Header>
            <Segment basic style={{ fontSize: '18px' }}>
              Ongoing development, training and internal growth opportunities.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default MobileBenefits;
