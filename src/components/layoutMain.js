import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css/normalize.css';
import '../styles/index.scss';

import Header from './header';
import Footer from './footer';

const LayoutMain = ({ children }) => (
    <>
        <Header description="Applications for anonymous story publishing and discussion" />
        <main>{children}</main>
        <Footer />
    </>
);

LayoutMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutMain;
