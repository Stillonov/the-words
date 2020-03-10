import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import 'normalize.css/normalize.css';
import '../styles/index.scss';

import Header from './header';
import Footer from "./footer"

const LayoutMain = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <>
      <Header description={data.site.siteMetadata.description} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
