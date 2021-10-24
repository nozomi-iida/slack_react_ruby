import {FC, Fragment, useEffect} from "react";
import useCurrentAccount from "../../hooks/useCurrentAccount";
import PersistenceKeys from "../persistenceKeys";

const AccountStateProvider: FC = ({children}) => {
  const { currentAccount, getCurrentAccount } = useCurrentAccount()
  const token = localStorage.getItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN);

  useEffect(() => {
    if(!token || currentAccount) return
    getCurrentAccount();
  }, [token, currentAccount, getCurrentAccount])

  return (
    <Fragment>{children}</Fragment>
  );
};

export default AccountStateProvider
