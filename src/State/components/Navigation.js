import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Image, Menu, Dropdown, Icon } from 'semantic-ui-react';

import imiLogo from '../../../public/imi.png';

const NavLink = ({ href, children, onClick }) => {
  return (
    <Dropdown.Item>
      {onClick ? (
        <a className='link' onClick={onClick} rel='noreferrer' style={{ cursor: 'pointer' }}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className='link' target='_blank' rel='noreferrer'>
            {children}
          </a>
        </Link>
      )}
    </Dropdown.Item>
  );
};

const NavLinks = ({ href, children, onClick }) => {
  return (
    <Menu.Item className='links-wrapper'>
      {onClick ? (
        <a className='link ' onClick={onClick} rel='noreferrer' style={{ cursor: 'pointer' }}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a className='link ' target='_blank' rel='noreferrer'>
            {children}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};

const HeaderLogo = React.forwardRef((props, ref) => {
  return <Image {...props} />;
});

const Navigation = ({ setNextLink }) => {
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
    <Menu style={{ marginBottom: 0 }} borderless>
      <Menu.Item style={{ marginRight: 'auto', cursor: 'pointer' }}>
        <Link href='/' passHref>
          <HeaderLogo alt='imi logo' src={imiLogo.src} size='tiny' />
        </Link>
      </Menu.Item>
      <Menu.Menu className='tablet-desktop '>
        {checkRoute('') ? null : (
          <React.Fragment>
            <NavLinks onClick={() => setNextLink(getForm(getRoute()))}>Sign Up for Alerts</NavLinks>{' '}
            <Menu.Item className='navDividers'>|</Menu.Item>
          </React.Fragment>
        )}

        <NavLinks href='https://www.irvmat.com/'>irvmat.com</NavLinks>
        <Menu.Item className='navDividers'>|</Menu.Item>
        <NavLinks href={getIndeedListing(getRoute())}>imi on Indeed</NavLinks>
      </Menu.Menu>
      <Dropdown className='mobile' item icon={<Icon size='large' name='bars' />} direction='left'>
        <Dropdown.Menu>
          {checkRoute('') ? null : <NavLink onClick={() => setNextLink(getForm(getRoute()))}>Sign-Up for Alerts</NavLink>}
          <NavLink href='https://www.irvmat.com/'>irvmat.com</NavLink>
          <NavLink href={getIndeedListing(getRoute())}>imi on Indeed</NavLink>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Navigation;
