import React from 'react'
import Form from '../components/layout/Form/Form'
import Input from '../components/interact/Input/Input'
import Button from '../components/interact/Button/Button'
import TopBar from '../components/layout/TopBar/TopBar'

export default function Home() {
  return (
    <>
      <TopBar title='Olá!' />
      <Form>
        <Input data-testid='email-input' name='email' label='E-mail' placeholder='email@email.com' />
        <Input name='password' label='Senha' placeholder='********' />
        <Button type='submit'>Log in</Button>
      </Form>
    </>
  )
}
