import { useState } from "react";
import Monitoring from "./Monitoring";
import Login from "./Login";

function App() {
  const [logged, setLogged] = useState(false);

  if (logged) {
    return <Monitoring />;
  }

  return <Login setLogged={setLogged} />;
}

export default App;
