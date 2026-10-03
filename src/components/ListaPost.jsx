//ListaPost.jsx

import PostCard from "./PostCard";

function ListaPost({posts}){

    return(
        <section className="posts-section">
            <h2 className="posts-title">Publicações</h2>

            <ul className="posts-list">
                {posts.map((post)=>(
                    <li key={post.id} className="posts-item"><PostCard publicacao={post}/></li>
                ))}
            </ul>

        </section>
    );
}

export default ListaPost;
