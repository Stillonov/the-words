import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './appLinks.module.scss';
import BadgeAppStoreSvg from '../images/badge-app-store.inline.svg';
import BadgeGooglePlaySvg from '../images/badge-google-play.inline.svg';

const AppLinks = ({ className, appLinks }) => (
    <div className={cn([styles.root, className])}>
        {appLinks.appStore && (
            <a className={styles.link} href={appLinks.appStore}>
                <BadgeAppStoreSvg className={styles.badgeAppStore} />
            </a>
        )}

        {appLinks.googlePlay && (
            <a className={styles.link} href={appLinks.googlePlay}>
                <BadgeGooglePlaySvg className={styles.badgeGooglePlus} />
            </a>
        )}
    </div>
);

AppLinks.propTypes = {
    className: PropTypes.string,
    appLinks: PropTypes.shape({
        appStore: PropTypes.string,
        googlePlay: PropTypes.string,
    }),
};

AppLinks.defaultProps = {
    className: '',
    appLinks: {
        appStore: '',
        googlePlay: '',
    },
};

export default AppLinks;
