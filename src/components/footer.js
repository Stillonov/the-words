import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from './container';
import styles from './footer.module.scss';
import LogoUnionSvg from '../images/logo-union.svg';

const Footer = ({ description }) => (
  <footer className={styles.root}>
    <Container className={styles.container}>
      Footer
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
