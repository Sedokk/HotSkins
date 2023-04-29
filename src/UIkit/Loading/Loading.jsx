import style from "./Loading.module.scss"

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}>
        <div className={style.scanner}>
          <span>Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
