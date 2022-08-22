import React from 'react';
import { Grid, Icon, Header, Segment } from 'semantic-ui-react';

const CustomBenefits = ({ icon, name, header, body, children }) => {
  return (
    <Grid.Column>
      <Icon className={icon} name={name} size='huge'></Icon>
      <Header as='h3'>{header}</Header>
      <Segment className='benefitsDescription' basic style={{ fontSize: '14px' }}>
        {body || children}
      </Segment>
    </Grid.Column>
  );
};

const Benefits = ({ state, name }) => {
  const salaryAmount = state === 'Indiana' ? '$65,000' : '$60,000';

  const stateName = state === name ? name : undefined;

  return (
    <React.Fragment>
      <Grid doubling className={'benefits desktop'} style={{ bottom: 0, position: 'absolute' }} columns={4}>
        {' '}
        <Header as='h1' className={'desktop'} style={{ marginBottom: '44px', marginLeft: '40px' }}>
          EXPLORE DRIVER BENEFITS
        </Header>
        <Grid.Row textAlign='center' style={{ padding: '0 30px' }}>
          <CustomBenefits name='home' icon='benefitsIcon' header='Home Every Night'>
            Deliver in the communities near your plant and come home every night.
          </CustomBenefits>
          <CustomBenefits name='dollar sign' icon='benefitsIcon' header='Compensation'>
            {`On average, full time drivers in ${stateName} earn ${salaryAmount} annually.`}
          </CustomBenefits>
          <CustomBenefits name='plus square outline' icon='benefitsIcon' header='Health Benefits'>
            Exceptional coverage for you and your family with low premiums.
          </CustomBenefits>
          <CustomBenefits name='dollar sign' icon='benefitsIcon' header='Career Growth'>
            Ongoing development, training and internal growth opportunities.
          </CustomBenefits>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default Benefits;
