import "./App.css";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Login />
    </div>
  );
}

export default App;
