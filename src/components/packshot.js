import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import AppLinks from './appLinks';
import Container from '../components/container';
import shuffleArray from '../utils/shuffleArray';
import styles from './packshot.module.scss';

const Packshot = ({ sloganDuration, slogans, appLinks }) => {
    const [shuffledSlogans] = useState(() => {
        return shuffleArray(slogans);
    });
    const [init, setInit] = useState(true);
    const currentSlogan = useRef(0);
    const sloganByLine = shuffledSlogans[currentSlogan.current].split('\n');
    const [sloganState, setSloganState] = useState(null);
    const prevSloganState = useRef(null);

    // Init
    useEffect(() => {
        const delay = setTimeout(() => {
            setInit(false); // On init
        }, 3000);

        return () => {
            clearTimeout(delay);
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
            lifetime = 400;
        } else if (sloganState === 'Active') {
            nextState = 'Out';
            lifetime = sloganDuration;
        } else if (sloganState === 'Out') {
            nextState = 'In';
            lifetime = 800;
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
                <div
                    className={cn([
                        styles.slogan,
                        {
                            [styles.sloganIn]: init,
                            [styles[`slogan${sloganState}`]]: sloganState,
                        },
                    ])}
                >
                    {sloganByLine.map(line => {
                        return <div key={line}>{line}</div>;
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
