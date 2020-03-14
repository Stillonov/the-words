import React from 'react';

import LayoutMain from '../components/layoutMain';
import Packshot from '../components/packshot';

const IndexPage = () => {
    const pageConfig = {
        description: 'Applications for anonymous story publishing and discussion',
        appLinks: {
            appStore: 'https://apple.com',
            googlePlay: 'https://google.com',
        },
        footerLogoLink: 'https://yandex.ru',
        sloganDuration: 6000,
        slogans: [
            `Keep calm
                you are
                anonymous`,

            `Keep calm
                & discuss other
                people's stories`,

            `Keep calm
                & Write your
                own story`,
        ],
    };

    return (
        <LayoutMain
            description={pageConfig.description}
            appLinks={pageConfig.appLinks}
            footerLogoLink={pageConfig.footerLogoLink}
        >
            <Packshot
                sloganDuration={pageConfig.sloganDuration}
                appLinks={pageConfig.appLinks}
                slogans={pageConfig.slogans}
            />
        </LayoutMain>
    );
};

export default IndexPage;
