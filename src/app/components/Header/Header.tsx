import { FC } from 'react'

import './Header.scss'

interface Props {
  // ログイン済みかどうか
  isLogin: boolean
}

/**
 * コンポーネントの説明を書いてください。
 */
const Header: FC<Props> = ({ isLogin }) => {
  return (
    <>
      <div className="header">
        <div className="header__icon">
          <a href="/" className="header__iconLink"><img src="/logo.png" alt="素敵なお酒ライフを" className="header__iconImage"/></a>
        </div>
        {isLogin
          ? (
              <div className="header__login">
                <a href="/login" className="header__loginLink"><img src="/circle.svg" alt="ログインする" className="header__loginIcon"/></a>
              </div>
            )
          : (
              <div className="header__login">
                <a href="/login" className="header__loginLink"><img src="/login.jpeg" alt="ログインする" className="header__loginIcon"/></a>
              </div>
            )}
      </div>
    </>
  )
}

export default Header
