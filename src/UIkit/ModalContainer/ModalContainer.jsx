import React, { useLayoutEffect } from "react"
import style from "./ModalContainer.module.scss"

const ModalContainer = ({ children, setOpened }) => {
  useLayoutEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => {
      document.body.style.overflowY = "auto"
    }
  })
  return (
    <div className={style.wrapper}>
      <div
        className={style.overlay}
        role='button'
        onClick={() => setOpened(false)}
      ></div>
      {children}
    </div>
  )
}

export default ModalContainer
