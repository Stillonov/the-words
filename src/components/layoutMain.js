import React from 'react';
import PropTypes from 'prop-types';

import Seo from './seo';
import Header from './header';
import Footer from './footer';
import styles from './layoutMain.module.scss';

const LayoutMain = ({ description, appLinks, footerLogoLink, children }) => (
    <>
        <Seo />
        <Header description={description} />
        <main className={styles.main}>{children}</main>
        <Footer appLinks={appLinks} footerLogoLink={footerLogoLink} />
    </>
);

LayoutMain.propTypes = {
    description: PropTypes.string,
    appLinks: PropTypes.shape({
        appStore: PropTypes.string,
        googlePlay: PropTypes.string,
    }),
    footerLogoLink: PropTypes.string,
    children: PropTypes.node.isRequired,
};

LayoutMain.defaultProps = {
    description: 'Applications for anonymous story publishing and discussion',
    appLinks: {
        appStore: '',
        googlePlay: '',
    },
    footerLogoLink: '',
};

export default LayoutMain;
