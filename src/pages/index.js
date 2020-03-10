import React from 'react';

import LayoutMain from '../components/layoutMain';
import SEO from '../components/seo';
import Container from '../components/container';
import AppLinks from '../components/appLinks';

const IndexPage = () => (
    <LayoutMain>
        <SEO />

        <Container>
            <AppLinks className="d-md-none" />
        </Container>
    </LayoutMain>
);

export default IndexPage;
