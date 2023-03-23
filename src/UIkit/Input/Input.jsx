import React, { useState } from "react"
import style from "./Input.module.scss"

const Input = ({ type, placeholder }) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState("")
  const inputType = type === "text" ? "text" : visible ? "text" : "password"
  return (
    <label className={style.label}>
      <input
        type={inputType}
        className={style.input}
        placeholder={placeholder}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      {type === "password" && (
        <img
          src={`./img/icons/${visible ? "" : "not-"}visible.svg`}
          alt='visibility'
          style={{ width: "20px" }}
          onClick={() => setVisible(!visible)}
        />
      )}
    </label>
  )
}

export default Input
