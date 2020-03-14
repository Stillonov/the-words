import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import AppLinks from "./appLinks";
import Container from "../components/container";
import styles from "./packshot.module.scss";

const Packshot = ({ slogans }) => {
    const [init, setInit] = useState(true);
    const [currentSlogan, setCurrentSlogan] = useState(0);
    const [sloganState, setSloganState] = useState(null);
    const sloganByLine = slogans[currentSlogan].split("\n");

    useEffect(() => {
        const delay = setTimeout(() => {
            setInit(false); // Inited
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
        }, 6000);

        return () => {
            clearTimeout(delay);
        };
    }, [init]);

    useEffect(() => {
        if (init || !sloganState) {
            return;
        }

        const nextSlogan = (currentSlogan >= slogans.length - 1) ? 0 : currentSlogan + 1;
        let nextState;
        let lifetime;

        if (sloganState === 'In') {
            nextState = 'Active';
            lifetime = 200;
            setCurrentSlogan(nextSlogan);
        } else if (sloganState === 'Active') {
            nextState = 'Out';
            lifetime = 6000;
        } else {
            nextState = 'In';
            lifetime = 800;
        }

        const delay = setTimeout(() => {
            setSloganState(nextState);
        }, lifetime);

        return () => {
            clearTimeout(delay);
        };
    }, [sloganState]);

    return (
        <div className={styles.root}>
            <Container className={styles.container}>
                <div className={cn([
                    styles.slogan,
                    {
                        [styles.sloganIn]: init,
                        [styles[`slogan${sloganState}`]] : sloganState,
                    },
                ])}>
                    {sloganByLine.map(line => {
                        return <div key={line}>{line}</div>;
                    })}
                </div>

                <AppLinks className={cn([styles.appLinks, "d-md-none"])}/>
            </Container>

            <div className={cn([
                styles.product,
                { [styles.productHidden]: init }
            ])}>
                <div className={styles.productAndroid}/>
                <div className={styles.productIos}/>
            </div>
        </div>
    );
};

Packshot.propTypes = {
    slogans: PropTypes.array.isRequired,
};

export default Packshot;
