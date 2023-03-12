import React from "react"
import style from "./MiddleSection.module.scss"
import { useFilters } from "../../../store"
import CheckboxLayout from "./CheckboxLayout/CheckboxLayout"
import HotPrices from "./HotPrices/HotPrices"

const MiddleSection = () => {
  const { textFilter, setTextFilter, deleteTextFilter } = useFilters(
    (state) => ({
      textFilter: state.textFilter,
      setTextFilter: state.setTextFilter,
      deleteTextFilter: state.deleteTextFilter,
    })
  )
  return (
    <section className={style.middleSection + " container"}>
      <div className={style.top}>
        <h3 className={style.title}>Выбор предметов для обмена</h3>
        <label className={style.label}>
          <img src='./img/icons/Union.svg' alt='union' />
          <input
            type='text'
            className={style.input}
            placeholder='Поиск по назаванию'
            value={textFilter}
            onChange={setTextFilter}
          />
          {textFilter ? (
            <img
              src='./img/icons/X.svg'
              alt='delete'
              style={{ cursor: "pointer" }}
              onClick={deleteTextFilter}
            />
          ) : (
            <div
              style={{
                width: "12px",
                height: "12px",
                background: "transparent",
              }}
            />
          )}
        </label>
      </div>
      <div className={style.bottom}>
        <div className={style.checkboxesWrapper}>
          <span className={style.checkSign}>Редкость</span>
          <CheckboxLayout />
        </div>
        <HotPrices />
      </div>
    </section>
  )
}

export default MiddleSection
