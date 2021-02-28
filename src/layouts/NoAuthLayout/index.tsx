import classnames from 'classnames'

import * as styles from './NoAuthLayout.module.scss'

interface INoAuthLayout {
  className?: string
}

const NoAuthLayout: React.FC<INoAuthLayout> = ({ children, className }) => (
  <div className={styles.container}>
    <header className={styles.header} />
    <main className={classnames([styles.main, className])}>{children}</main>
    <footer className={styles.footer} />
  </div>
)

export default NoAuthLayout
