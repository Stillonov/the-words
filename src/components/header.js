import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './header.module.scss';
import LogoTheWordsSvg from '../images/logo-the-words.svg';

const Header = ({ siteTitle }) => (
  <header className={styles.root}>
    <Link to="/">
      <LogoTheWordsSvg className={styles.logo} />
    </Link>

    <div>
      Applications for anonymous story publishing and discussion
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
