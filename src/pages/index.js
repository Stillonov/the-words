import React from 'react';

import LayoutMain from '../components/layoutMain';
import Packshot from '../components/packshot';

const IndexPage = () => (
    <LayoutMain
        description="Applications for anonymous story publishing and discussion"
        appLinks={{
            appStore: 'https://apple.com',
            googlePlay: 'https://google.com',
        }}
        footerLogoLink="https://yandex.ru"
    >
        <Packshot
            sloganDuration={6000}
            slogans={[
                `Keep calm
                you are
                anonymous`,

                `Keep calm
                & discuss other
                people's stories`,

                `Keep calm
                & Write your
                own story`,
            ]}
        />
    </LayoutMain>
);

export default IndexPage;
