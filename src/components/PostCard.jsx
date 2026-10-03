//PostCard.jsx === componente filho de ListaPost.jsx

import {ThumbsDown, ThumbsUp, Eye} from 'lucide-react';//disponibiliza ícones como componentes React ThumbsUp passa a ser um componente


function PostCard({publicacao}){

    return(
        <article className="post-card">

            <h3 className="post-title">{publicacao.title}</h3>

            <p className="post-body">{publicacao.body}</p>

            <ul className="post-tags">
                {publicacao.tags.map((tag) => (
                    <li key={tag} className="tag-item">{`#${tag}`}</li>
                ))}
            </ul>

            <div className="post-meta">
                <span className="post-stat">
                    <ThumbsUp/> {publicacao.reactions.likes}
                </span>
                
                <span className="post-stat">
                    <ThumbsDown/> {publicacao.reactions.dislikes}
                </span>

                <span className="post-stat">
                    <Eye/> {publicacao.views}
                </span>
            </div>

        </article>
    );
}

export default PostCard;
