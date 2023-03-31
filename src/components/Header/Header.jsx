import { onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase"
import style from "./Header.module.scss"
import HeaderLocked from "./HeaderLocked/HeaderLocked"
import HeaderUnlocked from "./HeaderUnlocked/HeaderUnlocked"

const Header = () => {
  const [locked, setLocked] = useState(true)
  onAuthStateChanged(auth, (userData) => {
    if (userData) setLocked(false)
    else setLocked(true)
  })
  return (
    <header className={style.header + " container"}>
      <Link to='/'>
        <div className={style.logoWrapper}>
          <img src='./img/logo/logo.svg' alt='logo' />
          <img src='./img/logo/logoText.svg' alt='label' />
        </div>
      </Link>
      {locked ? <HeaderLocked /> : <HeaderUnlocked />}
    </header>
  )
}

export default Header
