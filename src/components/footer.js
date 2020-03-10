import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from './container';
import AppLinks from './appLinks';
import styles from './footer.module.scss';
import LogoUnionSvg from '../images/logo-union-b.inline.svg';

const Footer = () => (
  <footer className={styles.root}>
    <Container className={styles.container}>
      <AppLinks className="d-none d-lg-flex" />

      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/privacy">Privacy policy</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/copyright">Copyright policy</Link>
          </li>
        </ul>
      </nav>

      <a className={styles.logo} href="/">
        <LogoUnionSvg />
      </a>
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
