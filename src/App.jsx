//App.jsx

import "./App.css";
import Header from "./components/Header";
import FormPost from "./components/FormPost";
import ListaPost from "./components/ListaPost";
import { buscarPosts } from "./services/postsService";
import { useState, useEffect } from "react";

function App(){

  const [mostrarForm, setMostrarForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(()=>{
    async function carregarPosts(){

      try {
        const postsApi = await buscarPosts();
        setPosts(postsApi);
      } catch (error){
        console.log(error);
        setErro('Não foi possível carregar as publicações.');
      }finally{
        setCarregando(false);
      }

    }

    carregarPosts();

  },[])

  return(
    <div className="app-shell">
      <Header/>

      <FormPost mostrarForm={mostrarForm} setMostrarForm={setMostrarForm} setPosts={setPosts}/>

      {carregando === true && 
        <p className="app-message">Carregando publicações...</p>
      }

      {erro !== '' && <p className="app-message error-message">{erro}</p>}

      {mostrarForm === false && carregando === false && erro === '' &&
        <ListaPost posts={posts}/>//Lista de posts só sera renderizada se o formulario estiver fechado
      }

    </>
  );
}

export default App;
