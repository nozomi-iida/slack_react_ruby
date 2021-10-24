import {Button} from "antd";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import PersistenceKeys from "../../config/persistenceKeys";
import styles from "./style.module.scss"
import routes from "../../config/routes";
import useCurrentAccount from "../../hooks/useCurrentAccount";
import {useForm} from "react-hook-form";
import {HttpClient} from "../../config/axiosInstance";
import APIHost from "../../config/APIHost";

const Home = () => {
  const { location } = useHistory()
  const { register, handleSubmit } = useForm()
  const token = new URLSearchParams(location.search).get("token")
  const history = useHistory()
  const { setCurrentAccount } = useCurrentAccount()

  const onSignOut = () => {
    localStorage.removeItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN);
    history.push(routes.signIn())
    setCurrentAccount(undefined)
  }

  const onSubmit = handleSubmit((params) => {
    HttpClient.request({
      method: "POST",
      url: `${APIHost}/v1/messages`,
      data: { ...params }
    });
  });

  useEffect(() => {
    if(token) {
      localStorage.setItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN, token);
    }
  }, [token])

  return (
    <div className={styles.page}>
      <form onSubmit={onSubmit}>
        {/*FIXME!: antd.formに変更*/}
        <input  {...register("message.content")} />
        <Button htmlType="submit">送信</Button>
      </form>
      <Button onClick={onSignOut}>サインアウト</Button>
    </div>
  )
}

export default Home
