import React, { useState } from "react"
import { shallow } from "zustand/shallow"
import { useFilters } from "../../../../store"
import style from "./SortSelector.module.scss"

const Option = ({ text }) => {
  const { sortType, setSortType } = useFilters((state) => ({
    sortType: state.sortType,
    setSortType: state.setSortType,
  }))
  return (
    <div className={style.option} onClick={() => setSortType(text)}>
      <span className={style.optionText}>{text} first</span>
      <div
        className={`${style.optionSelected} ${
          sortType === text ? style.selected : ""
        }`}
      ></div>
    </div>
  )
}

const sortTypes = ["high price", "low price", "high rarity", "low rarity"]

const SortSelector = () => {
  const [opened, setOpened] = useState(false)
  const sortType = useFilters((state) => state.sortType, shallow)
  return (
    <div className={style.selectWrapper}>
      <button className={style.selectBtn} onClick={(e) => setOpened(!opened)}>
        <span className={style.selectedText}>{sortType}</span>
        <img
          src='./img/icons/arrow.svg'
          alt='arrow'
          style={{ transform: `rotate(${opened ? "-180deg" : "0"})` }}
          className={style.arrow}
        />
        {opened && (
          <div className={style.optionsWrapper}>
            {sortTypes.map((e) => (
              <Option text={e} key={e} />
            ))}
          </div>
        )}
      </button>
    </div>
  )
}

export default SortSelector
