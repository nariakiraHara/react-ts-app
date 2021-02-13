---
to: "<%= componentType === 'page' ? `src/app/pages/${pageDir}/${componentName}.tsx` : null %>"
---

import React { useEffect } from 'react'
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
    </>
  )
}

export default Page
