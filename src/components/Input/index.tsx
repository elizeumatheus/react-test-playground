import classnames from 'classnames'

import * as styles from './input.module.scss'
import { IInput } from './input.types'

const Input: React.FC<IInput> = ({ className, label, error, ...props }) => {
  const inputClassnames = classnames([styles.input, className])

  return (
    <fieldset className={styles.fieldset}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={inputClassnames} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </fieldset>
  )
}

export default Input
