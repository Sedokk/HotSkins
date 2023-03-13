import React, { useState } from "react"
import style from "./PasswordInput.module.scss"

const PasswordInput = () => {
  const [visible, setVisible] = useState(false)
  return (
    <label className={style.label}>
      <input
        type={visible ? "text" : "password"}
        className={style.input}
        placeholder='Повторите пароль'
      />
      <img
        src={`./img/icons/${visible ? "" : "not-"}visible.svg`}
        alt='visibility'
        style={{ width: "20px" }}
        onClick={() => setVisible(!visible)}
      />
    </label>
  )
}

export default PasswordInput
