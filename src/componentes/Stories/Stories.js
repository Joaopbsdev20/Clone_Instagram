import './Stories.css';

import Story from './Componentes/Story';

import Goku from './Imagens/goku.jpg';
import Vegeta from './Imagens/vegeta.jpg';
import Gohan from './Imagens/gohan.jpg';
import Majinboo from './Imagens/majinboo.jpg';


function Stories() {
    return(
        <div className="Stories">
            <Story nomeDaConta="goku" imgPerfil={Goku} />
            <Story nomeDaConta="vegeta" imgPerfil={Vegeta} />
            <Story nomeDaConta="gohan" imgPerfil={Gohan} /> 
            <Story nomeDaConta="majinboo" imgPerfil={Majinboo} /> 
        </div>
    )
}

export default Stories;