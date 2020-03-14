import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Seo from './seo';
import Header from './header';
import Container from '../components/container';
import styles from './layoutInfo.module.scss';

const LayoutInfo = ({ title, children }) => (
    <>
        <Seo title={title} />
        <Header info title={title} />

        <main className={styles.main}>
            <Container>
                <section className={cn([styles.content, 'html'])}>
                    {children}
                </section>
            </Container>
        </main>
    </>
);

LayoutInfo.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutInfo;
