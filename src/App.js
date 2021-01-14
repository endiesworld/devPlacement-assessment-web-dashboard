
import './App.css';
import {Provider} from "react-redux" ;
import store from "./redux/store" ;
import OpstionSelector from "./component/option_selector_components/display-board/display.component" ;
import UserDisplayBoard from "./component/option_display_component/display-board/display.component"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <OpstionSelector/>
      <UserDisplayBoard/>
      </div>
    </Provider>
    
  );
}

export default App;
