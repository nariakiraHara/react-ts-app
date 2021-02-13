import React, { FC, useEffect } from 'react'
import { SUFFIX_OF_HEAD_TITLE } from 'lib/constants'

const Home: FC = () => {
  useEffect(() => {
    document.title = `トップページ${SUFFIX_OF_HEAD_TITLE}`
  })
  return (
  <div className="Home__contents">トップページです</div>
)}

export default Home