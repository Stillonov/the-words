import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './jingles.module.scss';

const Jingles = ({ className }) => (
    <div className={cn([styles.root, className])}>
        <div>Keep calm</div>
        <div>& discuss other</div>
        <div>people's stories</div>
    </div>
);

Jingles.propTypes = {
    className: PropTypes.string,
};

Jingles.defaultProps = {
    className: '',
};

export default Jingles;
