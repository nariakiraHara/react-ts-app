import React, { useEffect } from 'react'
import { SUFFIX_OF_HEAD_TITLE } from 'lib/constants'
import firebase from 'config/firebase' 
import { Main, Wrapper } from 'app/components/Layout'
import CardSimple from 'app/containers/common/CardSimple'
import './SignUp.scss'

const Page: React.FC = () => {
  useEffect(() => {
    document.title = `新規会員登録${SUFFIX_OF_HEAD_TITLE}`
  })

  function signUpGmail () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log('login is success')
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
          <div className="p-signUp">
            <CardSimple>
              <div className="p-signUp__contents">
                <h2 className="p-signUp__title">Sign Up</h2>
                <div className="p-signUp__label">メールアドレス</div>
                <input type="eamil" className="p-signUp__email"/>
                <div className="p-signUp__label">パスワード</div>
                <input type="password" className="p-signUp__password"/>
                <div className="p-signUp__oAuthArea">
                  <a href="#" onClick={() => signUpGmail()} className="p-signUp__gmail">googleで認証する</a>
                </div>
              </div>
            </CardSimple>
          </div>
        </Main>
      </Wrapper>
    </>
  )
}

export default Page
