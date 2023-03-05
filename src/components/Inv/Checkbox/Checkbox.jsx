import React, { useRef, useState } from "react"
import style from "./Checkbox.module.scss"

const Checkbox = ({ params }) => {
  const { rarity, color } = params
  const [checked, setChecked] = useState(false)
  const checkbox = useRef(null)
  return (
    <label className={style.chekboxLabel}>
      <input
        type='checkbox'
        name={rarity}
        className={style.checkbox}
        ref={checkbox}
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <div
        className={style.fakeCheckbox}
        style={{
          border: "1px solid " + color,
          backgroundColor: checked ? color : "transparent",
        }}
      ></div>
    </label>
  )
}

export default Checkbox
