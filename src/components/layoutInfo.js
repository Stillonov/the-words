import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import 'normalize.css/normalize.css';
import '../styles/index.scss';

import Header from './header';
import Container from '../components/container';
import styles from './layoutInfo.module.scss';

const LayoutInfo = ({ title, children }) => (
    <>
        <Header fixed title={title} />

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
