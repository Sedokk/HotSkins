import React from "react"
import style from "./WeaponItem.module.scss"

const WeaponItem = () => {
  return (
    <div className={style.item}>
      <img src='./img/CSGO/1.png' alt='Weapon' className={style.img} />
      <span className={style.price}>25 456 Р.</span>
      <div className={style.light}></div>
    </div>
  )
}

export default WeaponItem
