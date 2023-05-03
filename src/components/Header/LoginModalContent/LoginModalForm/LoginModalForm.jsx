import React, { useState } from "react"
import style from "./LoginModalForm.module.scss"
import InputUI from "../../../../UIkit/InputUI/InputUI"
import { useAuth } from "../../../../store"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useForm } from "react-hook-form"

const LoginModalForm = () => {
  const { setLoginModalOpened } = useAuth((state) => ({
    setLoginModalOpened: state.setLoginModalOpened,
  }))
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const onSignIn = (ev) => {
    ev.preventDefault()
    const login = ev.target.login.value
    const password = ev.target.password.value
    signInWithEmailAndPassword(auth, login, password)
      .then(() => {
        navigate("/")
        setLoginModalOpened(false)
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setError("Неверный логин")
            break
          case "auth/internal-error":
            setError("Internal error")
            break
          case "auth/wrong-password":
            setError("Неверный пароль")
            break
          default:
            console.log(err.code)
            break
        }
      })
  }
  return (
    <form className={style.form} onSubmit={onSignIn}>
      <InputUI
        type='text'
        placeholder='Ваш логин'
        name='login'
        autocomplete='email'
      />
      <InputUI
        type='password'
        placeholder='Пароль'
        name='password'
        autocomplete='current-password'
      />
      {error && <span className={style.error}>{error}</span>}
      <button type='submit' className={style.btn}>
        Войти
      </button>
    </form>
  )
}

export default LoginModalForm
