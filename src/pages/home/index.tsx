import NoAuthLayout from 'layouts/NoAuthLayout'

import { ReactComponent as FormsImage } from 'images/forms.svg'

import * as styles from './home.module.scss'
import SignIn from './components/SignIn'

const Home = () => (
  <NoAuthLayout className={styles.container}>
    <picture className={styles.image}>
      <FormsImage />
    </picture>
    <section className={styles.content}>
      <h1 className={styles.title}>Create an account</h1>
      <SignIn />
    </section>
  </NoAuthLayout>
)

export default Home
