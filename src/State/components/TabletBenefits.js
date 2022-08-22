import React from 'react';
import { Grid, Icon, Header, Segment } from 'semantic-ui-react';

const CustomTabletBenefits = ({ icon, name, header, description, body, children }) => {
  return (
    <Grid.Column>
      <Icon className={icon} name={name} size='huge'></Icon>
      <Header as='h3'>{header}</Header>
      <Segment className={description} basic style={{ fontSize: '18px' }}>
        {body || children}
      </Segment>
    </Grid.Column>
  );
};

const TabletBenefits = ({ state, name }) => {
  const salaryAmount = state === 'Indiana' ? '$65,000' : '$60,000';
  const stateName = state === name ? name : undefined;

  return (
    <React.Fragment>
      <Grid doubling className={'benefits tablet'} padded columns={4}>
        {' '}
        <Header as='h1' className={'tablet'} style={{ marginBottom: '44px', marginTop: '40px', marginLeft: '40px' }}>
          EXPLORE DRIVER BENEFITS
        </Header>
        <Grid.Row textAlign='center'>
          <CustomTabletBenefits
            icon='benefitsIcon'
            name='home'
            header='Home Every Night'
            description='benefitsDescription'
            style={{ whiteSpace: 'nowrap' }}
          >
            Deliver in the communities near your plant and come home every night.
          </CustomTabletBenefits>
          <CustomTabletBenefits icon='benefitsIcon' name='dollar sign' header='Compensation' description='benefitsDescription'>
            {`On average, full time drivers in ${stateName} earn ${salaryAmount} annually.`}
          </CustomTabletBenefits>
          <CustomTabletBenefits
            icon='benefitsIcon'
            name='plus square outline'
            header='Health Benefits'
            description='benefitsDescription'
          >
            Exceptional coverage for you and your family with low premiums.
          </CustomTabletBenefits>
          <CustomTabletBenefits icon='benefitsIcon' name='chart line' header='Career Growth' description='benefitsDescription'>
            Ongoing development, training and internal growth opportunities.
          </CustomTabletBenefits>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default TabletBenefits;
