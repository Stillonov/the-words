import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import AppLinks from './appLinks';
import Container from '../components/container';
import shuffleArray from '../utils/shuffleArray';
import loadImage from '../utils/loadImage';
import styles from './packshot.module.scss';
import phoneIosImage from '../images/phone-ios.png';
import phoneAndroidImage from '../images/phone-android.png';

const Packshot = ({ sloganDuration, slogans, appLinks }) => {
    const [shuffledSlogans] = useState(() => {
        return shuffleArray(slogans);
    });
    const [init, setInit] = useState(true);
    const currentSlogan = useRef(0);
    const [sloganState, setSloganState] = useState(null);
    const prevSloganState = useRef(null);

    // Init
    useEffect(() => {
        let isActual = true;

        Promise.all([
            loadImage(phoneIosImage),
            loadImage(phoneAndroidImage),
        ]).then(() => {
            if (isActual) {
                setInit(false); // On init
            }
        });

        return () => {
            isActual = false;
        };
    }, []);

    // If init finished
    useEffect(() => {
        if (init) {
            return;
        }

        const delay = setTimeout(() => {
            setSloganState('Out'); // Start slogans changing
        }, sloganDuration);

        return () => {
            clearTimeout(delay);
        };
    }, [init, sloganDuration]);

    // Slogans changing
    useEffect(() => {
        if (prevSloganState.current === sloganState) {
            return;
        }

        let nextState;
        let lifetime;

        prevSloganState.current = sloganState;

        if (sloganState === 'In') {
            nextState = 'Active';
            lifetime = 200;
        } else if (sloganState === 'Active') {
            nextState = 'Out';
            lifetime = sloganDuration;
        } else if (sloganState === 'Out') {
            nextState = 'In';
            lifetime = 0;
        }

        const delay = setTimeout(() => {
            if (sloganState === 'Out') {
                currentSlogan.current =
                    currentSlogan.current >= shuffledSlogans.length - 1
                        ? 0
                        : currentSlogan.current + 1;
            }

            setSloganState(nextState);
        }, lifetime);

        return () => {
            clearTimeout(delay);
        };
    }, [sloganState, sloganDuration, currentSlogan, shuffledSlogans.length]);

    return (
        <div className={styles.root}>
            <Container className={styles.container}>
                <div className={styles.slogan}>
                    <div
                        className={cn([
                            styles.sloganPrefix,
                            {
                                [styles.sloganPrefixActive]: !init,
                            },
                        ])}
                    >
                        Keep calm
                    </div>

                    <div className={styles.sloganFiller}>
                        <div>I</div>
                        <div>I</div>
                    </div>

                    {shuffledSlogans.map((slogan, index) => {
                        const sloganByLine = slogan.split('\n');

                        return (
                            <div
                                key={index}
                                className={cn([
                                    styles.sloganPostfix,
                                    {
                                        [styles.sloganPostfixIn]: init,
                                        [styles.sloganPostfixActiveSlow]:
                                            !init &&
                                            !sloganState &&
                                            currentSlogan.current === index,
                                        [styles[`sloganPostfix${sloganState}`]]:
                                            sloganState &&
                                            currentSlogan.current === index,
                                    },
                                ])}
                            >
                                {sloganByLine.map((line, index) => {
                                    if (index > 1) {
                                        return null;
                                    }

                                    return <div key={line}>{line}</div>;
                                })}
                            </div>
                        );
                    })}
                </div>

                <AppLinks
                    className={cn([
                        styles.appLinks,
                        { [styles.appLinksHidden]: init },
                        'd-md-none',
                    ])}
                    appLinks={appLinks}
                />
            </Container>

            <div
                className={cn([
                    styles.product,
                    { [styles.productHidden]: init },
                ])}
            >
                <div className={styles.productAndroid} />
                <div className={styles.productIos} />
            </div>
        </div>
    );
};

Packshot.propTypes = {
    sloganDuration: PropTypes.number,
    slogans: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Packshot.defaultProps = {
    sloganDuration: 6000,
};

export default Packshot;
