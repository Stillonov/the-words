import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import AppLinks from './appLinks';
import Container from '../components/container';
import styles from './packshot.module.scss';

const Packshot = ({ sloganDuration, slogans }) => {
    const [init, setInit] = useState(true);
    const [sloganState, setSloganState] = useState(null);
    const prevSloganState = useRef(null);
    const currentSlogan = useRef(0);
    const sloganByLine = slogans[currentSlogan.current].split('\n');

    useEffect(() => {
        const delay = setTimeout(() => {
            setInit(false); // On init
        }, 3000);

        return () => {
            clearTimeout(delay);
        };
    }, []);

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

    useEffect(() => {
        if (prevSloganState.current === sloganState) {
            return;
        }

        console.log('----------------------');
        console.log('Change slogan');
        console.log('currentSlogan.current', currentSlogan.current);
        console.log('prevSloganState.current', prevSloganState.current);
        console.log('sloganState', sloganState);

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
                    currentSlogan.current >= slogans.length - 1
                        ? 0
                        : currentSlogan.current + 1;
            }

            setSloganState(nextState);
        }, lifetime);

        return () => {
            clearTimeout(delay);
        };
    }, [sloganState, sloganDuration, currentSlogan, slogans]);

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

                <AppLinks className={cn([styles.appLinks, 'd-md-none'])} />
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
