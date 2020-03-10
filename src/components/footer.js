import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from './container';
import AppLinks from './appLinks';
import styles from './footer.module.scss';
import LogoUnionSvg from '../images/logo-union.inline.svg';

const Footer = ({ description }) => (
  <footer className={styles.root}>
    <Container className={styles.container}>
      <AppLinks />

      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">Privacy policy</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">Copyright policy</Link>
          </li>
        </ul>
      </nav>

      <div>
        <a href="/"><LogoUnionSvg /></a>
      </div>
    </Container>
  </footer>
);

Footer.propTypes = {
  description: PropTypes.string,
};

Footer.defaultProps = {
  description: '',
};

export default Footer;
