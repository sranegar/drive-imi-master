import Link from 'next/link';
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.css';
import { Image, Segment, Grid, Modal } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import imiLogo from '../../../public/imi.png';

const FooterLink = ({ href, children, onClick }) => {
  return (
    <Grid.Column textAlign='center' verticalAlign='middle' style={{ minWidth: '220px' }}>
      {onClick ? (
        <a
          className='footerLinks'
          onClick={onClick}
          rel='noreferrer'
          style={{ textDecoration: 'underline', color: '#939598', cursor: 'pointer' }}
        >
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className='footerLinks' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline', color: '#939598' }}>
            {children}
          </a>
        </Link>
      )}
    </Grid.Column>
  );
};

const FooterLogo = React.forwardRef((props, ref) => {
  return <Image {...props} />;
});

function Footer({ setNextLink }) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const router = useRouter();
  function checkRoute(stateName) {
    return stateName === router?.route.replace('/', '');
  }

  function getRoute() {
    return router?.route.replace('/', '').trim();
  }

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

  function getIndeedListing(stateName) {
    return `https://www.indeed.com/cmp/Irving-Materials-Inc./jobs?q=&l=${stateName}`;
  }

  return (
    <React.Fragment>
      <Modal open={showPrivacy} onClose={() => setShowPrivacy(false)} closeIcon>
        <Modal.Header>
          {' '}
          <Image centered alt='imi logo' src={imiLogo.src} size='tiny' />
        </Modal.Header>
        <Modal.Content style={{ padding: '30px' }}>
          <Modal.Header as='h2'>Privacy Policy</Modal.Header>
          Privacy policy: We respect your privacy. Any information you give us about yourself will only be used to communicate
          with you directly. We do not sell or distribute any information that you supply to us.
        </Modal.Content>
        <Modal.Content style={{ padding: '30px' }}>
          <Modal.Header as='h2'>Cookies Policy</Modal.Header>
          We record statistics on the traffic to our site. This is non-identifying data, such as the number of pages viewed, the
          number of visits to our site, what search terms you used, if any, to find us, your location, the type and version of a
          browser and device you used to access our web site, etc. This information is used for our own internal purposes,
          contains no personal information and cannot be used to gather such information. This is accomplished by the use of
          cookies. A cookie is a small amount of data that is sent to your browser from a web server and stored on your computer's
          hard drive. Our cookies do not generate personal data and they do not read personal data from your machine. By
          continuing to use this web site, you are agreeing to our use of cookies in manner described above. We reserve the right
          to change our Privacy & Cookie Policies without notice.
        </Modal.Content>
      </Modal>
      <Grid
        columns={4}
        stackable
        padded
        verticalAlign='middle'
        style={{ minHeight: '100px', marginTop: '0', paddingTop: '30px', borderTop: '1px solid #BEBFC1' }}
      >
        <Grid.Column width={3} className='desktop' style={{ marginRight: 'auto', cursor: 'pointer' }}>
          <Link href='/' passHref>
            <FooterLogo alt='imi logo' src={imiLogo.src} size='tiny' />
          </Link>
        </Grid.Column>
        <Grid.Column width={3} className='tablet' style={{ cursor: 'pointer' }}>
          <Link href='/' passHref>
            <FooterLogo centered alt='imi logo' src={imiLogo.src} size='tiny' style={{ paddingBottom: '20px' }} />
          </Link>
        </Grid.Column>
        <Grid.Column className='mobile' style={{ cursor: 'pointer', margin: '0 auto' }}>
          <Link href='/' passHref>
            <FooterLogo centered alt='imi logo' src={imiLogo.src} size='tiny' style={{ paddingBottom: '20px' }} />
          </Link>
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid centered stackable columns={4}>
            {checkRoute('') ? null : <FooterLink onClick={() => setNextLink(getForm(getRoute()))}>Sign-Up for Alerts</FooterLink>}
            <FooterLink href='https://www.irvmat.com/'>irvmat.com</FooterLink>
            <FooterLink href={getIndeedListing(getRoute())}>imi on Indeed</FooterLink>
            <FooterLink onClick={() => setShowPrivacy(true)}>Privacy Policy</FooterLink>
          </Grid>
        </Grid.Column>
        <Grid.Column width={3} className='desktop' textAlign='right' style={{ marginLeft: 'auto' }}>
          &copy; 2022 <b>Irving Materials, Inc.</b>
        </Grid.Column>
        <Grid.Column width={3} className='tablet' textAlign='center' style={{ marginLeft: 'auto' }}>
          &copy; 2022 Irving Materials, Inc.
        </Grid.Column>
        <Grid.Column className='mobile' textAlign='center' style={{ marginLeft: 'auto' }}>
          &copy; 2022 Irving Materials, Inc.
        </Grid.Column>

        <Grid.Column width={16}>
          <Segment textAlign='center' basic style={{ fontStyle: 'italic', color: '#939598' }}>
            All qualified applicants will receive consideration for employment without regard to race, color, religion, sex,
            sexual orientation, gender identity, national origin, disability, or status as a protected&nbsp;veteran.
          </Segment>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default Footer;
