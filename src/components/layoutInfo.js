import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css/normalize.css';
import '../styles/index.scss';

import Header from './header';
import styles from './layoutInfo.module.scss';

const LayoutInfo = ({ title, children }) => (
    <>
        <Header title={title} />
        <main className={styles.main}>{children}</main>
    </>
);

LayoutInfo.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node.isRequired,
};

LayoutInfo.defaultProps = {
    title: '',
};

export default LayoutInfo;
