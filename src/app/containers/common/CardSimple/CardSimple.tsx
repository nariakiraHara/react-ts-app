import { ReactNode, FC } from 'react'

import './CardSimple.scss'

interface Props {
  /**
   * カードで表示する子要素
   */
  children: ReactNode
}

/**
 * コンポーネントの説明を書いてください。
 */
const CardSimple: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="cardSimple">
        {children}
      </div>
    </>
  )
}

export default CardSimple
