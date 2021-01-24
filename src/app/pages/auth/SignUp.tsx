import React from 'react'
import 

const SignUp: React.FC = () => {
  function signUpGmail () {
    const provider = new firebase.auth
  }
  return (
    <>
      <input type="eamil" className="SignUp__email"/>
      <input type="password" className="SignUp__password"/>
      <a onClick={() => signUpGmail()} className="signUp__gmail"></a>
    </>
  )
}