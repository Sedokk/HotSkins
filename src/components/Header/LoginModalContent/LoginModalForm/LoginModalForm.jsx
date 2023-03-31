import React from "react"
import style from "./LoginModalForm.module.scss"
import InputUI from "../../../../UIkit/InputUI/InputUI"
import { useAuth } from "../../../../store"
import { useNavigate } from "react-router-dom"
import { auth } from "../../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const LoginModalForm = () => {
  const { setUser, setLoginModalOpened } = useAuth((state) => ({
    setLoginModalOpened: state.setLoginModalOpened,
    setUser: state.setUser,
  }))
  const navigate = useNavigate()
  const onSignIn = async (ev) => {
    ev.preventDefault()
    const login = ev.target.login.value
    const password = ev.target.password.value
    signInWithEmailAndPassword(auth, login, password)
      .then(() => {
        navigate("/inv")
        setLoginModalOpened(false)
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <form className={style.form} onSubmit={onSignIn}>
      <InputUI type='text' placeholder='Ваш логин' name='login' />
      <InputUI type='password' placeholder='Пароль' name='password' />
      <button type='submit' className={style.btn}>
        Войти
      </button>
    </form>
  )
}

export default LoginModalForm
