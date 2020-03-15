import React from 'react';
import { Link } from 'gatsby';

import LayoutMain from '../components/layoutMain';
import PageMessage from '../components/pageMessage';

const NotFoundPage = () => (
    <LayoutMain title="404: Not found">
        <PageMessage>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p>
                Go to the <Link to="/">Main Page</Link>
            </p>
        </PageMessage>
    </LayoutMain>
);

export default NotFoundPage;
