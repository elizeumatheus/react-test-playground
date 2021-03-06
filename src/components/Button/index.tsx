import classnames from 'classnames'

import * as styles from './Button.module.scss'
import { IButton } from './Button.types'

const Button: React.FC<IButton> = ({
  children,
  variant = 'filled',
  className,
  ...props
}) => {
  const buttonClassnames = classnames([
    styles.button,
    styles[variant],
    className,
  ])

  return (
    <button className={buttonClassnames} {...props}>
      {children}
    </button>
  )
}

export default Button
