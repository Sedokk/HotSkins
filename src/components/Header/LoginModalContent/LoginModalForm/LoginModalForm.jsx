import React from "react"
import style from "./LoginModalForm.module.scss"
import Input from "../../../../UIkit/Input/Input"

const LoginModalForm = () => {
  return (
    <form className={style.form}>
      <Input type='text' placeholder='Your login' />
    </form>
  )
}

export default LoginModalForm
