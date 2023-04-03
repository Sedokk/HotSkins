import { signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firebase"
import style from "./HeaderMenu.module.scss"

const HeaderMenu = () => {
  const [opened, setOpened] = useState(false)
  const navigate = useNavigate()
  const onLeave = () => {
    signOut(auth)
    navigate("/")
  }
  // useEffect(() => {
  //   const onClickOutsideMenu = (ev) => {
  //     if (ev.target.id !== "menu") setOpened(false)
  //   }
  //   if (opened) {
  //     window.addEventListener("click", onClickOutsideMenu)
  //   } else {
  //     window.removeEventListener("click", onClickOutsideMenu)
  //   }
  //   return () => window.removeEventListener("click", onClickOutsideMenu)
  // }, [opened])
  return (
    <div className={style.wrapper} onClick={() => setOpened(!opened)} id='menu'>
      <div className={style.avatar}></div>
      <span className={style.name}>Name</span>
      <img src='./img/icons/arrow.svg' alt='arrow' className={style.arrow} />
      {opened && (
        <div className={style.menu}>
          <div className={style.menuItem} role='button' onClick={onLeave}>
            Выйти
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderMenu
