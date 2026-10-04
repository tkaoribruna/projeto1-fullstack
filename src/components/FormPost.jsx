//FormPost.jsx
import { useState, useRef, useEffect } from "react";
import { criarPost } from "../services/postsService";


function FormPost({mostrarForm, setMostrarForm, setPosts}){
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const tituloRef = useRef();

    useEffect(() => {
        if(mostrarForm === true){
            tituloRef.current.focus();
        }       
    }, [mostrarForm]);

    // publicarPost recebe o objeto que representa o evento de submissão do formulário
    async function publicarPost(event){
        event.preventDefault();//Impede que a página recarregue

        if(titulo.trim() === "" || conteudo.trim() === "") return;//Impede que o usuario publique um formulario com campos vazios

       try {

            const postCriado = await criarPost(titulo, conteudo, 5);

            const novoPost = {
                ...postCriado,
                tags: [],
                reactions: {
                    likes: 0,
                    dislikes: 0
                },
                views: 0
            };

            setPosts((postsAtuais) => [novoPost, ...postsAtuais]);

            setTitulo('');//limpa o campo de titulo
            setConteudo('');//limpa o campo de conteúdo
            setMostrarForm(false);//altera o estado, e essa alteração faz o React renderizar o componente novamente, mas sem o formulario
       } catch (error) {
            console.log(error);
       }

    }

    return(
        <div className="composer-wrap">

            <button className="composer-button" type="button" onClick={() => setMostrarForm(true)}>Publique uma ideia
            </button>

            {mostrarForm === true && 

                <form className="composer-form" onSubmit={publicarPost}>{/*Quando o submit for executado um objeto com os dados do evento é passado para publicarPost*/}

                    <label className="form-label field-label">Título</label>
                    <input className="form-control composer-input" type="text" ref={tituloRef} onChange={(e) => setTitulo(e.target.value)} value={titulo}/>

                    <label className="form-label field-label mt-3">Conteúdo</label>
                    <textarea className="form-control composer-input" onChange={(e) => setConteudo(e.target.value)} value={conteudo}></textarea>

                    <button type="submit" className="btn btn-primary mt-3 me-2 publish-button">Publicar</button>
                    <button type="button" className="btn btn-secondary mt-3 cancel-button" onClick={() => setMostrarForm(false)}>Cancelar</button>

                </form>
            
            }
        </div>
    );
}

export default FormPost;
