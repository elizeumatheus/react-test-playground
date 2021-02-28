import { useForm, Controller } from 'react-hook-form'

import Button from 'components/Button'
import Input from 'components/Input'

import Fields from 'pages/home/utils/Fields'

import * as styles from './SignIn.module.scss'

const defaultValues = {
  [Fields.NAME]: '',
  [Fields.EMAIL]: '',
  [Fields.PASSWORD]: '',
  [Fields.CONFIRM_PASSWORD]: '',
}

const SignIn = () => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  })

  const onSubmit = (data: any) => console.log({ data })

  return (
    <form
      autoComplete="off"
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        as={Input}
        control={control}
        label="Name"
        name={Fields.NAME}
        type="text"
      />
      <Controller
        as={Input}
        control={control}
        label="E-mail"
        name={Fields.EMAIL}
        type="email"
      />
      <Controller
        as={Input}
        control={control}
        label="Password"
        name={Fields.PASSWORD}
        type="password"
      />
      <Controller
        as={Input}
        control={control}
        label="Confirm password"
        name={Fields.CONFIRM_PASSWORD}
        type="password"
      />
      <Button type="submit" className={styles.submitButton}>
        Enter
      </Button>
    </form>
  )
}

export default SignIn
