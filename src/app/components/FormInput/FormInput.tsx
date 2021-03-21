import { FC } from 'react'

import './FormInput.scss'

interface Props {
  /**
   * フォームのどのタイプにするか
   */
  type: 'email' | 'password' | 'text'
  /**
   * placeholder
   */
  placeholder?: string
}

/**
 * FormInputの共通コンポーネント
 */
const FormInput: FC<Props> = ({ type, placeholder }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className="formInput"/>
    </>
  )
}

export default FormInput
