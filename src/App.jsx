import Home from "./Components/Home";
import appStore from "./Components/Store/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  );
};

export default App;
