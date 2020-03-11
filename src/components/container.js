import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './container.module.scss';

const Container = ({ className, children }) => (
  <div className={cn([styles.root, className])}>
    {children}
  </div>
);

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Container.defaultProps = {
    children: null,
};

export default Container;
