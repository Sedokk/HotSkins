import React from "react"
import { Controller, useForm } from "react-hook-form"
import InputUI from "../../UIkit/InputUI/InputUI"
import style from "./Registration.module.scss"

const Registration = () => {
  const { control, handleSubmit, resetField } = useForm({
    mode: "onChange",
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className={style.wrapper + " container"}>
      <img src='./img/connectionLogo.png' alt='logo' className={style.img} />
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.title}>Регистрация</h2>
        <Controller
          control={control}
          defaultValue=''
          name='name'
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, name }, fieldState: { error } }) => (
            <InputUI
              type='text'
              placeholder='Ваше имя'
              width={450}
              onChange={onChange}
              error={error}
              reset={resetField}
              name={name}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=''
          name='email'
          rules={{
            required: "This field is required",
            pattern: {
              value:
                /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/u,
              message: "Invalid email adress",
            },
          }}
          render={({ field: { onChange, name }, fieldState: { error } }) => (
            <InputUI
              type='text'
              placeholder='Ваш email'
              width={450}
              onChange={onChange}
              error={error}
              reset={resetField}
              name={name}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=''
          name='password'
          rules={{
            required: "This field is required",
            pattern: {
              value:
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message:
                "You should use 6 or more characters with a mix of letters, numbers & symbols",
            },
          }}
          render={({ field: { onChange, name }, fieldState: { error } }) => (
            <InputUI
              type='password'
              placeholder='Пароль'
              width={450}
              onChange={onChange}
              error={error}
              reset={resetField}
              name={name}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=''
          name='passwordRepeat'
          rules={{
            required: "This field is required",
            validate: (value, field) =>
              value === field.password || "Your passwords must be the same",
          }}
          render={({ field: { onChange, name }, fieldState: { error } }) => (
            <InputUI
              type='password'
              placeholder='Повторите пароль'
              width={450}
              onChange={onChange}
              error={error}
              reset={resetField}
              name={name}
            />
          )}
        />
        <button className={style.formBtn}>Зарегестрироваться</button>
      </form>
    </div>
  )
}

export default Registration
