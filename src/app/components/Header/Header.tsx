import { FC } from 'react'

import './Header.scss'

interface Props {
  /**
   * テキスト文字列 ※サンプルなので適宜修正してください。
   */
  text?: string
}

/**
 * コンポーネントの説明を書いてください。
 */
const Header: FC<Props> = ({ text }) => {
  return (
    <>
      <div>{text}</div>
    </>
  )
}

export default Header
