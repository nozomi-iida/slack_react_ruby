export const APIHost = ((): string => {
  switch (process.env.REACT_APP_ENV) {
    case "production":
      return "https://api-slack-react-ruby.herokuapp.com";
    default:
      // モックに接続
      return "https://7a6265fd626f.ngrok.io";
  }
})();

export default APIHost
