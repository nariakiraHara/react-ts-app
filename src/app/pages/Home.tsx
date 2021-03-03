import React, { FC, useEffect } from 'react'
import { Main, Wrapper } from 'app/components/Layout'
import { SUFFIX_OF_HEAD_TITLE } from 'lib/constants'

const Home: FC = () => {
  useEffect(() => {
    document.title = `トップページ${SUFFIX_OF_HEAD_TITLE}`
  })
  return (
  <>
    <Wrapper>
      <Main>
        <div className="p-home">トップページです</div>
      </Main>
    </Wrapper>
  </>
)}

export default Home