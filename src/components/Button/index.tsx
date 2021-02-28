import * as React from 'react'
import classnames from 'classnames'

import * as styles from './button.module.scss'

const Button: React.FC = ({ children }) => {
  const className = classnames([styles.button])

  return <button className={className}>{children}</button>
}

export default Button
