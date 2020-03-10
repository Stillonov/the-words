import React from 'react';
import cn from 'classnames';

import styles from './badges.module.scss';

const Badges = () => (
  <div className={styles.root}>
    <a className={cn([styles.badge, styles.badgeAppStore])} href="/" />
    <a className={cn([styles.badge, styles.badgeGooglePlus])} href="/" />
  </div>
);

export default Badges;
