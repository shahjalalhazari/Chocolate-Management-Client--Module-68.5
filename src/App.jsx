import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-12 px-28 py-16 bg-base-100">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
