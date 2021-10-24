import {atom, useRecoilState} from "recoil";
import {Account} from "../../data/Account";
import {HttpClient} from "../../config/axiosInstance";
import APIHost from "../../config/APIHost";

const currentAccountState = atom<Account | undefined>({
  key: "currentAccountState",
  default: undefined
})


const useCurrentAccount = () => {
  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)

  const getCurrentAccount = async () => {
    HttpClient.request<Account>({
      method: "GET",
      url: `${APIHost}/v1/accounts`
    }).then(res => {
      setCurrentAccount(res.data)
    })
  }
  return { currentAccount, setCurrentAccount, getCurrentAccount }
}

export default useCurrentAccount
