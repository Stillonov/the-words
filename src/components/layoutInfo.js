import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css/normalize.css';
import '../styles/index.scss';

import Header from './header';

const LayoutInfo = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

LayoutInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutInfo;
