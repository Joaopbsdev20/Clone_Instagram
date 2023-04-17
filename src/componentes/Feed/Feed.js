import './Feed.css';

import Post from './componentes/Post/Post'

import imgPerfilExemplo01 from './imagens/goku.jpg';
import imgPerfilExemplo02 from './imagens/vegeta.jpg';
import imgPerfilExemplo03 from './imagens/gohan.jpg';
import imgPerfilExemplo04 from './imagens/majinboo.jpg';

import imgExemplo01 from './imagens/gokupost.jpg';
import imgExemplo02 from './imagens/vegetapost.jpg';
import imgExemplo03 from './imagens/gohanpost.png';
import imgExemplo04 from './imagens/majinboopost.png';

export default function Feed() {
    return (
        <div className="Feed">

            <Post 
              nomePerfil="Goku"
              imagemPost={imgExemplo01}
              imagemPerfil={imgPerfilExemplo01} 
              />
            <Post
             nomePerfil="Vegeta"
             imagemPost={imgExemplo02}
             imagemPerfil={imgPerfilExemplo02}
             /> 
            <Post 
             nomePerfil="Gohan"
             imagemPost={imgExemplo03}
             imagemPerfil={imgPerfilExemplo03}
             />
            <Post
             nomePerfil="MajinBoo"
             imagemPost={imgExemplo04}
             imagemPerfil={imgPerfilExemplo04}
            />
            <Post 
            nomePerfil="Babu"
             />
        </div>
    )
}