import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./jingles.module.scss";

const Jingles = ({ className, jingles }) => {
    const jinglesByLine = jingles[0].split('\n');

    return (
        <div className={cn([styles.root, className])}>
            {
                jinglesByLine.map((line) => {
                    return <div>{line}</div>;
                })
            }
        </div>
    );
};

Jingles.propTypes = {
    className: PropTypes.string,
    jingles: PropTypes.array
};

Jingles.defaultProps = {
    className: "",
    jingles: [
        `Keep calm
        & discuss other
        people's stories`,
        `Keep calm
        & fuck off!`,
    ]
};

export default Jingles;
