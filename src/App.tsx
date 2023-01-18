import { useDispatch } from "react-redux";
import { isVisible } from "./features/snackbar/snackbar";
import "./App.css";
import SnackBar from "./Components/SnackBar";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch(isVisible({ message: "Successfully Implemented Snackbar"}))
        }
      >
        Trigger SnackBar
      </button>
      <SnackBar />
    </div>
  );
}

export default App;
