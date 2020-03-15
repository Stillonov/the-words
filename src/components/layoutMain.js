import React from 'react';
import PropTypes from 'prop-types';

import Seo from './seo';
import Header from './header';
import Footer from './footer';
import styles from './layoutMain.module.scss';

const LayoutMain = ({
    description,
    children,
    footer,
    title,
    appLinks,
    footerLogoLink,
}) => (
    <>
        <Seo title={title} />
        <Header description={description} />
        <main className={styles.main}>{children}</main>
        {footer && (
            <Footer appLinks={appLinks} footerLogoLink={footerLogoLink} />
        )}
    </>
);

LayoutMain.propTypes = {
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
    footer: PropTypes.bool,
};

LayoutMain.defaultProps = {
    description: 'Applications for anonymous story publishing and discussion',
    footer: false,
};

export default LayoutMain;
