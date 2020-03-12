import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'gatsby';

import Container from './container';
import styles from './header.module.scss';
import LogoTheWordsSvg from '../images/logo-the-words.inline.svg';

const Header = props => {
    const { fixed, shadow, title, description } = props;

    return (
        <header
            className={cn([
                styles.root,
                {
                    [styles.rootFixed]: fixed,
                    [styles.rootShadow]: shadow,
                },
            ])}
        >
            <Container className={styles.container}>
                <Link className={styles.logo} to="/">
                    <LogoTheWordsSvg />
                </Link>

                {description && (
                    <div className={styles.description}>{description}</div>
                )}

                {title && <div className={styles.title}>{title}</div>}
            </Container>
        </header>
    );
};

Header.propTypes = {
    fixed: PropTypes.bool,
    shadow: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Header.defaultProps = {
    fixed: false,
    shadow: false,
    title: '',
    description: '',
};

export default Header;
