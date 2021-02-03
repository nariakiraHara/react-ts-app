import React from 'react'
import firebase from 'config/firebase' 

import './SignUp.scss'

const page: React.FC = () => {
  function signUpGmail () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential
        const user = result.user
        console.log('login is success')
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(`errorCode: ${errorCode} | message: ${errorMessage}`)
      })
  }
  return (
    <>
      <div className="p-signUp">
        <input type="eamil" className="p-signUp__email"/>
        <input type="password" className="p-signUp__password"/>
        <a href="#" onClick={() => signUpGmail()} className="p-signUp__gmail">googleで認証する</a>
      </div>
    </>
  )
}

export default page
