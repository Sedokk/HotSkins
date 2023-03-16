import React, { useEffect } from "react"
import { useFilters, useItems } from "../../../../store"
import WeaponItem from "../WeaponItem/WeaponItem"
import { arrayFilter } from "../../../../modules"
import style from "./WeaponLayout.module.scss"

const WeaponLayout = () => {
  const { textFilter, onlyHotPrices, dotaFilters, csgoFilters } = useFilters(
    (state) => ({
      textFilter: state.textFilter,
      onlyHotPrices: state.onlyHotPrices,
      dotaFilters: state.dotaFilters,
      csgoFilters: state.csgoFilters,
    })
  )
  const { data, currentGame } = useItems((state) => ({
    data: state.data,
    currentGame: state.currentGame,
  }))
  const filters = currentGame === "CSGO" ? csgoFilters : dotaFilters
  const filtered =
    data &&
    data.filter((e) =>
      arrayFilter(e, filters, textFilter, onlyHotPrices, currentGame)
    )
  return (
    <>
      {data ? (
        data.filter((e) => e.game === currentGame).length > 0 ? (
          filtered.length > 0 ? (
            <div className={style.weaponWrapper}>
              {filtered.map((e) => (
                <WeaponItem data={e} key={e.id} />
              ))}
            </div>
          ) : (
            <div className={style.notFound}>
              <img
                src='./img/other/bigLoop.png'
                alt='no items'
                style={{ width: "300px" }}
              />
              <p>По выбранным вами параметрам ничего не найдено ಥ_ಥ</p>
            </div>
          )
        ) : (
          <div className={style.notFound}>
            <img
              src='./img/other/bigLoop.png'
              alt='no items'
              style={{ width: "300px" }}
            />
            <p>К сожалению, у вас нет преметов из выбранной вами игры ಥ_ಥ</p>
          </div>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default WeaponLayout
