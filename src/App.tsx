import React, { useEffect } from 'react'
import firebase from 'config/firebase'
import Header from 'app/components/Header'
import Router from 'app/pages/Router'

import './App.scss'

const Page: React.FC = () => {
  let isLogin = false
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      isLogin = !!user
    })
  })
  return (
    <>
      <div className="p-app">
        <div className="p-app__headerArea">
          <Header isLogin={isLogin} />
        </div>
        <Router />
      </div>
    </>
  )
}

export default Page
