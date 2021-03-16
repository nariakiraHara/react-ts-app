---
to: "<%= componentType === 'component' ? `src/app/components/${componentName}/${componentName}.tsx` : null %>"
---
import { FC } from 'react'

import './<%= componentName %>.scss'

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
      <div>{text}</div>
    </>
  )
}

export default <%= componentName %>
