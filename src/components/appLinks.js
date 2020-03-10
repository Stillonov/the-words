import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './appLinks.module.scss';
import BadgeAppStoreSvg from '../images/badge-app-store-b.inline.svg';
import BadgeGooglePlaySvg from '../images/badge-google-play-b.inline.svg';

const AppLinks = ({ className }) => (
    <div className={cn([styles.root, className])}>
        <a className={styles.link} href="/">
            <BadgeAppStoreSvg className={styles.badgeAppStore} />
        </a>
        <a className={styles.link} href="/">
            <BadgeGooglePlaySvg className={styles.badgeGooglePlus} />
        </a>
    </div>
);

AppLinks.propTypes = {
    className: PropTypes.string,
};

AppLinks.defaultProps = {
    className: '',
};

export default AppLinks;
