import styles from "./style.module.scss"
import APIHost from "../../config/APIHost";
import {Button} from "antd";

const SignIn = () => {
  return (
    <div className={styles.page}>
      <Button type="primary" className={styles.link} href={`${APIHost}/auth/slack`}>Slackでログイン</Button>
    </div>
  )
}

export default SignIn
