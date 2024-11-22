import React from 'react'
import LoginForm from '../components/Forms/AuthForm/LoginForm'
import AuthForm from '../components/Forms/AuthForm/AuthForm'

export default function Login() {
  return (
    <div>
      <AuthForm
        formComponent={<LoginForm />}
        bottomLinkText='Sign up'
        bottomLinkHref='/signup'
        topText='Start for free'
        mainHeading='Welcome Back'
        bottomText='New Here?'
      />
    </div>
  )
}
