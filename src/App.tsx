import { Provider } from "react-redux";
import "./App.css"
import { store } from "./redux/store";
import Navbar from "./components/Navbar"


function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
    </Provider>
  )
}

export default App