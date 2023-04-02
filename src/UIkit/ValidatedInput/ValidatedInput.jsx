import React from "react"
import { Controller } from "react-hook-form"
import InputUI from "../InputUI/InputUI"

const ValidatedInput = ({
  control,
  name,
  rules,
  type,
  placeholder,
  resetField,
  width,
}) => {
  return (
    <Controller
      control={control}
      defaultValue=''
      name={name}
      rules={rules || {}}
      render={({ field: { onChange, name }, fieldState: { error } }) => (
        <InputUI
          type={type || "text"}
          placeholder={placeholder}
          width={width}
          onChange={onChange}
          error={error}
          reset={resetField}
          name={name}
        />
      )}
    />
  )
}

export default ValidatedInput
