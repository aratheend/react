import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MyRouters from "./Routers/MyRouter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRouters/>
    </BrowserRouter>
  );
}

export default App;
