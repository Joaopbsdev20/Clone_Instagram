
import './LadoEsquerdo.css';

import Logo from './imagens/logo.png';

import ItemMenu from './componentes/ItemMenu';

import { HiHome } from "react-icons/hi";

export default function LadoEsquerdo() {
    return (
        <div className='LadoEsquerdo'>
            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='menu-principal'>
            <ItemMenu icone={<HiHome />} texto="Home" />
            <ItemMenu icone="&" texto="Discover" />
            <ItemMenu icone="*" texto="Reels" />
            <ItemMenu icone="#" texto="Home" />
            <ItemMenu icone="&" texto="Discover" />
            <ItemMenu icone="*" texto="Reels" />
            <ItemMenu icone="#" texto="Home" />
            <ItemMenu icone="&" texto="Discover" />
            <ItemMenu icone="*" texto="Reels" />
            </div>
 
        </div>
    )
}