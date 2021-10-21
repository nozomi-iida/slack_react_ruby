import {atom, useRecoilState} from "recoil";
import {Account} from "../../data/Account";
import {HttpClient} from "../../config/axiosInstance";
import APIHost from "../../config/APIHost";
import {useState} from "react";

const currentAccountState = atom<Account | undefined>({
  key: "currentAccountState",
  default: undefined
})


const useCurrentAccount = () => {
  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)
  const getCurrentAccount = async () => {
    HttpClient.request<Account>({
      method: "GET",
      url: `${APIHost.DEV_API}/v1/account`
    }).then(res => {
      setCurrentAccount(res.data)
    })
  }
  return { currentAccount, setCurrentAccount, getCurrentAccount }
}

export default useCurrentAccount
