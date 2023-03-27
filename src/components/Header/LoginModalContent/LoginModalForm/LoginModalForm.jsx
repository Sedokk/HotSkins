import React from "react"
import style from "./LoginModalForm.module.scss"
import InputUI from "../../../../UIkit/InputUI/InputUI"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useAuth } from "../../../../store"
import { useNavigate } from "react-router-dom"

const firebaseConfig = {
  apiKey: "AIzaSyCB93ftEfoBzkRH3oAT0emOukNuy0H3yag",
  authDomain: "hotskins-sed.firebaseapp.com",
  projectId: "hotskins-sed",
  storageBucket: "hotskins-sed.appspot.com",
  messagingSenderId: "133169785959",
  appId: "1:133169785959:web:76070daccc01620723b8c2",
  measurementId: "G-M8NMDN7JZB",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const LoginModalForm = () => {
  const setUser = useAuth((state) => state.setUser)
  const navigate = useNavigate()
  const onSignIn = async (ev) => {
    ev.preventDefault()
    const form = ev.target
    const login = form.login.value
    const password = form.password.value
    try {
      const userData = await signInWithEmailAndPassword(auth, login, password)
      const user = userData.user
      setUser(user)
      navigate("/inv")
    } catch (error) {
      console.log(error.message)
    }
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
