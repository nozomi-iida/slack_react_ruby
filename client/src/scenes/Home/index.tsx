import {Button, Input, notification} from "antd";
import {FormEvent, useState} from "react";
import {useHistory} from "react-router-dom";
import PersistenceKeys from "../../config/persistenceKeys";
import styles from "./style.module.scss"
import routes from "../../config/routes";
import useCurrentAccount from "../../hooks/useCurrentAccount";
import {HttpClient} from "../../config/axiosInstance";
import APIHost from "../../config/APIHost";

const Home = () => {
  const history = useHistory()
  const { currentAccount, setCurrentAccount } = useCurrentAccount()
  const [content, setContent] = useState("");

  const onSignOut = () => {
    localStorage.removeItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN);
    history.push(routes.signIn())
    setCurrentAccount(undefined)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!content.trim()) return;
    HttpClient.request({
      method: "POST",
      url: `${APIHost}/v1/messages`,
      data: { message: { content } }
    }).then(() => {
      notification.success({message: "メッセージを送信しました"})
    });
    setContent("");
  };


  return (
    <div className={styles.page}>
      <div className={styles.box}>
        {!currentAccount && <h4 className={styles.danger}>ログインをしてください</h4>}
        <form className={styles.form} onSubmit={onSubmit}>
          <Input  onChange={e => {setContent(e.target.value)}} value={content} />
          <Button type="primary" htmlType="submit">Slackにメッセージを送信</Button>
        </form>
        {currentAccount ? (
          <Button type="primary" danger onClick={onSignOut}>サインアウト</Button>
        ) : (
          <Button href={routes.signIn()}>サインイン</Button>
        )}
      </div>
    </div>
  )
}

export default Home
