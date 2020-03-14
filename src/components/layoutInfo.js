import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Header from './header';
import Seo from './seo';
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
    title: PropTypes.node,
    children: PropTypes.node.isRequired,
};

LayoutInfo.defaultProps = {
    title: '',
};

export default LayoutInfo;
