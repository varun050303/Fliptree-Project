import React from 'react'
import SignupForm from '../components/Forms/AuthForm/SignupForm.jsx'
import AuthForm from '../components/Forms/AuthForm/AuthForm.jsx'
export default function SignUp() {
  return (
    <AuthForm
     formComponent={<SignupForm />}
     bottomLinkText='Log in'
     bottomLinkHref='/signup'
     topText='Start for free'
     mainHeading='Create new account'
     bottomText='Already a Member?'
    />
  )
}
