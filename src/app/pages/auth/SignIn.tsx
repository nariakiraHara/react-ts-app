import React  from 'react'
import CardSimple from 'app/containers/common/CardSimple'
import firebase from 'config/firebase'
import FormInput from 'app/components/FormInput'
import getQueryParams from 'lib/getQueryParams'
import { Wrapper, Main } from 'app/components/Layout'

import './SignIn.scss'

const login: React.FC = () => {
  function signUpGmail () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth()
      .signInWithPopup(provider)
      .then(() => {
        const redirect = getQueryParams(window.location.search, 'done')
        window.location.href = redirect
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(`errorCode: ${errorCode} | message: ${errorMessage}`)
      })
  }
  return (
    <>
      <Wrapper>
        <Main>
          <div className="p-signIn">
            <CardSimple>
              <div className="p-signIn__contents">
                <h2 className="p-signIn__title">Login</h2>
                <div className="p-signIn__label">メールアドレス</div>
                <FormInput type={'email'} placeholder={'email:'} />
                <div className="p-signIn__label">パスワード</div>
                <FormInput type={'password'} placeholder={'password:'} />
                <div className="p-signIn__oAuthArea">
                  <a href="#" onClick={() => signUpGmail()} className="p-signIn__gmail">googleで認証する</a>
                </div>
              </div>
            </CardSimple>
          </div>
        </Main>
      </Wrapper>
    </>
  )
}

export default login
