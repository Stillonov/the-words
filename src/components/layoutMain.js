import React from 'react';
import PropTypes from 'prop-types';

import Seo from './seo';
import Header from './header';
import Footer from './footer';
import styles from './layoutMain.module.scss';

const LayoutMain = ({ children }) => (
    <>
        <Seo />
        <Header
            description="Applications for anonymous story publishing and discussion"
        />
        <main className={styles.main}>{children}</main>
        <Footer />
    </>
);

LayoutMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutMain;
