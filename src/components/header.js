import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'gatsby';

import Container from './container';
import styles from './header.module.scss';
import LogoTheWordsSvg from '../images/logo-the-words.inline.svg';

const Header = props => {
    const { info, title, description } = props;

    return (
        <header
            className={cn([
                styles.root,
                {
                    [styles.rootInfo]: info,
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
    info: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Header.defaultProps = {
    info: false,
    title: '',
    description: '',
};

export default Header;
