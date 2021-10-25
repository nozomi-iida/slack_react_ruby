export const APIHost = ((): string => {
  switch (process.env.REACT_APP_ENV) {
    case "production":
      return "https://api-slack-react-ruby.herokuapp.com";
    default:
      // モックに接続
      return "https://9d29243fe462.ngrok.io";
  }
})();

export default APIHost
