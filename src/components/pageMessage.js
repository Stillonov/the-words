import React from 'react';
import PropTypes from 'prop-types';

import styles from './pageMessage.module.scss';

const PageMessage = ({ children }) => (
    <div className={styles.root}>{children}</div>
);

PageMessage.propTypes = {
    children: PropTypes.node,
};

PageMessage.defaultProps = {
    children: null,
};

export default PageMessage;
