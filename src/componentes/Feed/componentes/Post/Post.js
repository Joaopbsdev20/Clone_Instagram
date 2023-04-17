
import './Post.css';
//propriedades
export default function Post (props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor">
                <img alt="Imagem Super-Herói" src= {props.imagemPerfil}></img>
                    </div>
                <div className="NomePerfilAutor">{props.nomePerfil}</div>
                <div className="MenuBarraSuperior"></div>
            </div>
            <div className="ConteudoPost"><img alt="Imagem Super-Herói" src= {props.imagemPost}></img></div>
        </div>

    )
}