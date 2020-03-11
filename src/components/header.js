import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from './container';
import styles from './header.module.scss';
import LogoTheWordsSvg from '../images/logo-the-words.inline.svg';

const Header = ({ title, description }) => (
    <header className={styles.root}>
        <Container className={styles.container}>
            <Link className={styles.logo} to="/">
                <LogoTheWordsSvg />
            </Link>

            { description && <div className={styles.description}>{description}</div> }

            { title && <div className={styles.title}>{title}</div> }
        </Container>
    </header>
);

Header.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

Header.defaultProps = {
    title: '',
    description: '',
};

export default Header;
