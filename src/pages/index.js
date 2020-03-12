import React from 'react';

import LayoutMain from '../components/layoutMain';
import SEO from '../components/seo';
import Container from '../components/container';
import Jingles from '../components/jingles';
import AppLinks from '../components/appLinks';

const IndexPage = () => (
    <LayoutMain>
        <SEO />

        <Container>
            <Jingles />

            <AppLinks className="d-md-none" />
        </Container>
    </LayoutMain>
);

export default IndexPage;
