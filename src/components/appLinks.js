import React from 'react';

import styles from './appLinks.module.scss';
import BadgeAppStoreSvg from '../images/badge-app-store-b.inline.svg'
import BadgeGooglePlaySvg from '../images/badge-google-play-b.inline.svg'

const AppLinks = () => (
  <div className={styles.root}>
    <a className={styles.link} href="/">
      <BadgeAppStoreSvg className={styles.badgeAppStore} />
    </a>
    <a className={styles.link} href="/">
      <BadgeGooglePlaySvg className={styles.badgeGooglePlus} />
    </a>
  </div>
);

export default AppLinks;
