import React from "react"
import { useItems, useCart } from "../../../../store"

const AddAllBtn = () => {
  const { dotaData, csData, currentGame } = useItems((state) => ({
    currentGame: state.currentGame,
    csData: state.csData,
    dotaData: state.dotaData,
  }))
  const addAll = useCart((state) => state.addAll)
  return (
    <button
      onClick={() => addAll(currentGame === "CSGO" ? csData : dotaData)}
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
