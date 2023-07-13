import Login from "@components/Login";
import Profile from "@components/Profile";
import ChangeColor from "@components/ChangeColor";
import { Provider } from "react-redux";
import store from "./store";
const Home = () => {
  return (<div>
    <Provider store={store}>
      <Profile />
      <Login />
      <ChangeColor />
    </Provider>
  </div>)

};

export default Home;
