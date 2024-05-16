import PropTypes from "prop-types";
import { useState } from "react";
import { CORREOS } from "./utils";

function Login({ setLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleLogin = () => {
    setError(null);
    if (email && CORREOS.includes(email)) {
      const [correctPassword] = email.split("@");
      if (correctPassword === password) return setLogged(true);
    }
    setError("Usuario y/o Contraseña incorrectos");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex flex-col gap-5">
      <h1 className="font-bold text-blue-600 text-4xl">Granja Vertical</h1>
      <span className="flex flex-col border rounded p-10 gap-3 w-2/6">
        {error && <p className="text-red-400">{error}</p>}
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Correo"
          className="w-full py-3 px-2 border rounded"
        />
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Contraseña"
          className="w-full py-3 px-2 border rounded"
        />
        <button
          className="w-full py-3 text-white bg-blue-600 rounded"
          type="button"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </span>
    </div>
  );
}

Login.propTypes = {
  setLogged: PropTypes.func,
};

export default Login;