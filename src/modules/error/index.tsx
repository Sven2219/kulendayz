import errorImage from '/error.png'
import style from './index.module.scss'

const ErrorScreen = () => {
  return (
    <div className={style['error-container']}>
      <img src={errorImage} />
    </div>
  )
}

export default ErrorScreen
