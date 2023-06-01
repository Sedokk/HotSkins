import React from "react"
import style from "./HeaderUnlocked.module.scss"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import FlattedNavigation from "./FlattedNavigation/FlattedNavigation"
import BurgerNavigation from "./BurgerNavigation/BurgerNavigation"
const HeaderUnlocked = () => {
  const isBurger = useMediaQuery({ maxWidth: 820 })
  return (
    <header className={style.header + " container"}>
      <Link to='/'>
        <div className={style.logoWrapper}>
          <img src='./img/logo/logo.svg' alt='logo' />
          <img src='./img/logo/logoText.svg' alt='label' />
        </div>
      </Link>
      {!isBurger ? <FlattedNavigation /> : <BurgerNavigation />}
    </header>
  )
}

export default HeaderUnlocked
