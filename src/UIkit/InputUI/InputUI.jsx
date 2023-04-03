import React, { useState } from "react"
import style from "./InputUI.module.scss"

const InputUI = ({
  type,
  placeholder,
  width,
  name,
  error,
  onChange,
  reset,
  autocomplete,
}) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState("")
  const inputType = type === "text" ? "text" : visible ? "text" : "password"
  name = name || ""
  return (
    <label className={style.label} style={{ width: width + "px" || "400px" }}>
      {error && <span className={style.error}>{error.message}</span>}
      <input
        type={inputType}
        className={style.input}
        placeholder={placeholder}
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value)
          onChange && onChange(ev)
        }}
        name={name}
        autoComplete={autocomplete || ""}
      />
      {value && (
        <img
          src='./img/icons/X.svg'
          role='button'
          onClick={() => {
            setValue("")
            reset && reset(name)
          }}
          className={style.clearBtn}
        />
      )}
      {type === "password" && (
        <img
          src={`./img/icons/${visible ? "" : "not-"}visible.svg`}
          alt='visibility'
          style={{ width: "20px" }}
          onClick={() => setVisible(!visible)}
          className={style.visibleBtn}
          role='button'
        />
      )}
    </label>
  )
}

export default InputUI
