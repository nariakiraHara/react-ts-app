---
to: "<%= componentType === 'container' ? `src/app/containers/${containerDir}/${componentName}/${componentName}.tsx` : null %>"
---
import { FC } from 'react'

import style from './<%= componentName %>.scss'

interface Props {
  /**
   * テキスト文字列 ※サンプルなので適宜修正してください。
   */
  text: string
}

/**
 * コンポーネントの説明を書いてください。
 */
const <%= componentName %>: FC<Props> = ({ text }) => {
  return (
    <>
      <style jsx>{style}</style>
      <div>{text}</div>
    </>
  )
}

export default <%= componentName %>
