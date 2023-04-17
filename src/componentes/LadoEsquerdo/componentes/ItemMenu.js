export default function ItemMenu(props) {
    return (
        <div className="ItemMenu">
            <span>
                <span className='icone'>{props.icone}</span>
                <span className='texto'>{props.texto}</span>
            </span>
            
        </div>
    )
}