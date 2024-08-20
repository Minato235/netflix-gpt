import Body from "./componenets/Body.js";
import appStore from "./util/appStroe.js";
import { Provider } from 'react-redux'; // For React-Redux integration

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
