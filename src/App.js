import { Routes } from "./Routes";
import { GlobalStyle } from "./style/global";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  const CloseButton = ({ closeToast }) => (
    <button style={{color: "#868E96", border: "none", height: "10px", backgroundColor: "#F8F9FA"}}>X</button>
  );

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        closeButton={CloseButton}
        toastStyle={{ backgroundColor: "#F8F9FA", color: "#343B41", fontWeight: "700"}}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </div>
  );
}

export default App;
