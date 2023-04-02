import { createUserWithEmailAndPassword } from "firebase/auth"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import ValidatedInput from "../../UIkit/ValidatedInput/ValidatedInput"
import style from "./Registration.module.scss"

const Registration = () => {
  const navigate = useNavigate()
  const methods = useForm({
    mode: "onChange",
  })
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => navigate("/inv"))
      .catch((err) => console.log(err))
  }
  return (
    <div className={style.wrapper + " container"}>
      <img src='./img/connectionLogo.png' alt='logo' className={style.img} />
      <form className={style.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={style.title}>Регистрация</h2>
        <ValidatedInput
          {...methods}
          name='name'
          type='text'
          rules={{ required: "The field is required" }}
          placeholder='Ваше имя'
          width={450}
        />
        <ValidatedInput
          {...methods}
          name='email'
          type='text'
          rules={{
            required: "This field is required",
            pattern: {
              value:
                /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/u,
              message: "Invalid email adress",
            },
          }}
          placeholder='Ваш email'
          width={450}
        />
        <ValidatedInput
          {...methods}
          name='password'
          type='text'
          rules={{
            required: "This field is required",
            pattern: {
              value:
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message:
                "You should use 6 or more characters with a mix of letters, numbers & symbols",
            },
          }}
          placeholder='Пароль'
          width={450}
        />
        <ValidatedInput
          {...methods}
          name='passwordRepeat'
          type='text'
          rules={{
            required: "This field is required",
            validate: (value, field) =>
              value === field.password || "Your passwords must be the same",
          }}
          placeholder='Повторите пароль'
          width={450}
        />
        <button className={style.formBtn}>Зарегестрироваться</button>
      </form>
    </div>
  )
}

export default Registration
