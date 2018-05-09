import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames/bind'

import styles from './BackLink.scss'

const cx = classNames.bind(styles)

const BackLink = ({ children, className }) => (
        <div className={cx({ wrapper: true }, className)}>
            <span className={styles.icon}>&lt;&lt; </span>
            <span className={styles.link}>back to {children}</span>
            <span className={styles.icon}> &lt;&lt;</span>
        </div>
    )

BackLink.propTypes = {
    children: string.isRequired,
    className: string,
}

BackLink.defaultProps = {
    className: '',
}

export default BackLink
