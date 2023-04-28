import React from "react"
import { useFilters, useItems } from "../../../../store"
import WeaponItem from "../WeaponItem/WeaponItem"
import { arrayFilter, sortItems } from "../../../../modules"
import style from "./WeaponLayout.module.scss"
import { shallow } from "zustand/shallow"

const NotFound = ({ text }) => {
  return (
    <div className={style.notFound}>
      <img
        src='./img/other/bigLoop.png'
        alt='no items'
        style={{ width: "300px" }}
      />
      <p>{text}</p>
    </div>
  )
}

const WeaponLayout = () => {
  const { textFilter, onlyHotPrices, dotaFilters, csgoFilters, sortType } =
    useFilters(
      (state) => ({
        textFilter: state.textFilter,
        onlyHotPrices: state.onlyHotPrices,
        dotaFilters: state.dotaFilters,
        csgoFilters: state.csgoFilters,
        sortType: state.sortType,
      }),
      shallow
    )
  const { data, currentGame } = useItems(
    (state) => ({
      data: state.data,
      currentGame: state.currentGame,
    }),
    shallow
  )
  const filters = currentGame === "CSGO" ? csgoFilters : dotaFilters
  const filtered =
    data &&
    sortItems(
      data.filter((e) =>
        arrayFilter(e, filters, textFilter, onlyHotPrices, currentGame)
      ),
      sortType
    )
  return (
    <>
      {data ? (
        data.some((e) => e.game === currentGame) ? (
          filtered.length > 0 ? (
            <div className={style.weaponWrapper}>
              {filtered.map((e) => (
                <WeaponItem data={e} key={e.id} />
              ))}
            </div>
          ) : (
            <NotFound text='По выбранным вами параметрам ничего не найдено ಥ_ಥ' />
          )
        ) : (
          <NotFound text='К сожалению, у вас нет преметов из выбранной вами игры ಥ_ಥ' />
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default WeaponLayout
