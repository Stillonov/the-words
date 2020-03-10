import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from './container';
import styles from './header.module.scss';
import LogoTheWordsSvg from '../images/logo-the-words.inline.svg';

const Header = ({ description }) => (
  <header className={styles.root}>
    <Container className={styles.container}>
      <Link className={styles.logo} to="/">
        <LogoTheWordsSvg />
      </Link>

      <div className={styles.description}>
        {description}
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  description: PropTypes.string,
};

Header.defaultProps = {
  description: '',
};

export default Header;
