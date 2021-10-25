import styles from "./style.module.scss"
import {useEffect} from "react";
import PersistenceKeys from "../../config/persistenceKeys";
import {useHistory} from "react-router-dom";
import {Button} from "antd";
import routes from "../../config/routes";

const SlackAuth = () => {
  const { location } = useHistory()
  const token = new URLSearchParams(location.search).get("token")

  useEffect(() => {
    if(token) {
      localStorage.setItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN, token);
    }
  }, [token])


  return (
    <div className={styles.page}>
      <div>
        <h2>Slackの認証に成功しました🎉</h2>
        <Button type="primary" href={routes.home()}>次へ</Button>
      </div>
    </div>
  )
};

export default SlackAuth
