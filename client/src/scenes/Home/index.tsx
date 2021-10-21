import {Button, Input} from "antd";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import PersistenceKeys from "../../config/persistenceKeys";
import styles from "./style.module.scss"
import routes from "../../config/routes";
import useCurrentAccount from "../../hooks/useCurrentAccount";

const Home = () => {
  const {location} = useHistory()
  const token = new URLSearchParams(location.search).get("token")
  const history = useHistory()
  const { setCurrentAccount } = useCurrentAccount()

  const onSignOut = () => {
    localStorage.removeItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN);
    history.push(routes.signIn())
    setCurrentAccount(undefined)
  }

  useEffect(() => {
    if(token) {
      localStorage.setItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN, token);
    }
  }, [token])

  return (
    <div className={styles.page}>
      <form>
        <Input />
        <Button>送信</Button>
      </form>
      <Button onClick={onSignOut}>サインアウト</Button>
    </div>
  )
}

export default Home
