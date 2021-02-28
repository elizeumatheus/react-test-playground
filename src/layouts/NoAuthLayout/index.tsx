import * as styles from './noAuthLayout.module.scss'

const NoAuthLayout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header} />
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer} />
  </div>
)

export default NoAuthLayout
