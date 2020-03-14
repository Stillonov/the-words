import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import AppLinks from './appLinks';
import Container from '../components/container';
import styles from './packshot.module.scss';

const Packshot = ({ className, slogans }) => {
    const [init, setInit] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setInit(false);
        }, 2000);

        return () => {
            clearTimeout(delay);
        }
    }, []);

    const sloganByLine = slogans[0].split('\n');

    return (
        <div className={cn([styles.root, className])}>
            <Container className={styles.container}>
                <div className={styles.slogan}>
                    {sloganByLine.map(line => {
                        return <div key={line}>{line}</div>;
                    })}
                </div>

                <AppLinks className={cn([styles.appLinks, 'd-md-none'])} />
            </Container>

            <div className={cn([styles.product, { [styles.productHidden]: init }])}>
                <div className={styles.productAndroid} />
                <div className={styles.productIos} />
            </div>
        </div>
    );
};

Packshot.propTypes = {
    className: PropTypes.string,
    slogans: PropTypes.array,
};

Packshot.defaultProps = {
    className: '',
    slogans: [],
};

export default Packshot;
