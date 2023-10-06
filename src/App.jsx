import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formulariosEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {formulariosEstaVisivel && (
      <Formulario/>
    )}

    <button onClick={() => setFormularioEstaVisivel(!formulariosEstaVisivel)} type="button">Toggle Form</button>
    */}
    </> 
  )
}

export default App
