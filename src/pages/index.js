import React from 'react';

import LayoutMain from '../components/layoutMain';
import SEO from '../components/seo';
import Packshot from '../components/packshot';

const IndexPage = () => (
    <LayoutMain>
        <SEO />

        <Packshot
            slogans={[
                `Keep calm
                & discuss other
                people's stories`,

                `Keep calm
                & fuck off!`,
            ]}
        />
    </LayoutMain>
);

export default IndexPage;
