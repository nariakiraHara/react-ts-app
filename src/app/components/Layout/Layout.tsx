import { ReactNode, FC } from 'react'

import './Main.scss'
import './Wrapper.scss'

interface MainProps {
  children: ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className="main">
        {children}
      </div>
    </>
  )
}

interface Props {
  children: ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}
