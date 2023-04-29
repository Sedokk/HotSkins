import { signOut } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firebase"
import { useAuth } from "../../../../store"
import style from "./HeaderMenu.module.scss"

const HeaderMenu = () => {
  const [opened, setOpened] = useState(false)
  const [user, setUser] = useAuth((st) => [st.user, st.setUser])
  const navigate = useNavigate()
  const onLeave = () => {
    signOut(auth)
    navigate("/start")
    setUser("")
  }
  return (
    <div className={style.wrapper} onClick={() => setOpened(!opened)} id='menu'>
      <div className={style.avatar}></div>
      <span className={style.name}>{user.displayName || "Undefined user"}</span>
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
