import React, { useState } from "react"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firebase"

import style from "./BurgerNavigation.module.scss"
import { useAuth } from "../../../../store"

const BurgerNavigation = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [user, setUser] = useAuth((st) => [st.user, st.setUser])
  const navigate = useNavigate()
  const onLeave = () => {
    signOut(auth)
    navigate("/start")
    setUser("")
  }
  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className={`${style.btn} ${isOpened && style.active}`}
        role='button'
      ></div>
      {isOpened && (
        <>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li className={`${style.navItem} ${style.personBlock}`}>
                <span className={style.userName}>
                  {user.displayName ?? "Undefined user"}
                </span>
                <button className={style.leaveBtn} onClick={onLeave}>
                  Выйти
                </button>
              </li>
              <li className={style.navItem}>Помощь</li>
              <li className={style.navItem}>Контакты</li>
              <li className={style.navItem}>История</li>
            </ul>
          </nav>
          <div
            className={style.overlay}
            onClick={() => setIsOpened(false)}
          ></div>
        </>
      )}
    </>
  )
}

export default BurgerNavigation
