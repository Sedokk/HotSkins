import React from "react"
import { shallow } from "zustand/shallow"
import { useItems, useCart } from "../../../../store"
import style from "./AddAllBtn.module.scss"

const AddAllBtn = () => {
  const { currentGame, data } = useItems(
    (state) => ({
      currentGame: state.currentGame,
      data: state.data,
    }),
    shallow
  )
  const addAll = useCart((state) => state.addAll, shallow)
  return (
    <button onClick={() => addAll(data, currentGame)} className={style.btn}>
      Добавить все
    </button>
  )
}

export default AddAllBtn
