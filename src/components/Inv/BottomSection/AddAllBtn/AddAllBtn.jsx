import React from "react"
import { shallow } from "zustand/shallow"
import { useItems, useCart } from "../../../../store"

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
    <button
      onClick={() => addAll(data, currentGame)}
      style={{
        fontFamily: "Rubik",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#f4c038",
        background: "#20222a",
      }}
    >
      Добавить все
    </button>
  )
}

export default AddAllBtn
