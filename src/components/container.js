import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './container.module.scss';

const Container = ({ className, size, children }) => {
    const sizeCapitalized = size.charAt(0).toUpperCase() + size.slice(1);

    return <div className={cn([
            styles.root,
            className,
            styles[`rootSize${sizeCapitalized}`],
        ]
    )}>
        {children}
    </div>;
};

Container.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Container.defaultProps = {
    children: null,
    size: '',
};

export default Container;
