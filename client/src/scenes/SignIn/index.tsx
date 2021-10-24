import styles from "./style.module.scss"
import APIHost from "../../config/APIHost";

const SignIn = () => {
  return (
    <div className={styles.page}>
      <a href={`${APIHost}/auth/slack`}>ログイン</a>
    </div>
  )
}

export default SignIn
