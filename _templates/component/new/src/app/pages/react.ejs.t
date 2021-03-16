---
to: "<%= componentType === 'page' ? `src/app/pages/${pageDir}/${componentName}.tsx` : null %>"
---

import React { useEffect } from 'react'
import { SUFFIX_OF_HEAD_TITLE } from 'lib/constants'
import { Main, Wrapper } from 'app/components/Layout'
import './<%= componentName %>.scss'

/**
 * コンポーネントの説明を書いてください。
 */
const Page: React.FC = () => {
  // ページのメタ情報を修正してください。
  const pageTitle = `${SUFFIX_OF_HEAD_TITLE}`
  const description = ''

  useEffect(() => {
    document.title = `${pageTitle}`
  })
  return (
    <>
      <Wrapper>
        <Main>
          <div>page</div>
        </Main>
      </Wrapper>
    </>
  )
}

export default Page
