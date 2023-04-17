import './Story.css';


export default function Story(props) {
    return (
        <div className="Story">
            <div className="imgStory">
                <img src={props.imgPerfil} />
            </div>
            <div className="nomeStory">
                <span>{props.nomeDaConta}</span>
            </div>
        </div>
    )
}