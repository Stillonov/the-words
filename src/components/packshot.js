import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import AppLinks from './appLinks';
import Container from '../components/container';
import styles from './packshot.module.scss';

const Packshot = ({ className, slogans }) => {
    const slogansByLine = slogans[0].split('\n');

    return (
        <div className={cn([styles.root, className])}>
            <Container className={styles.container}>
                <div className={styles.slogan}>
                    {slogansByLine.map(line => {
                        return <div>{line}</div>;
                    })}
                </div>

                <AppLinks className={cn([styles.appLinks, 'd-md-none'])} />
            </Container>

            <div className={styles.product}>
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
