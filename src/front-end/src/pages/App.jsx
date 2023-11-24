import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "../routes/Router";
import { UserProvider } from "../shared/contexts/user-context";
import '../styles/global.css';

function App() {
  return (
    <>
      <UserProvider>
        <Router  />
        <ToastContainer theme="colored" />
      </UserProvider>
    </>
  );
}

export default App;
