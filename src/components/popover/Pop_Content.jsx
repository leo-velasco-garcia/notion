import "../../assets/scss/components/popover/Pop_Content.scss"
import cat from "../../assets/imgs/cat.jpg"

const Pop_Content = ({ titulo, ultimaEdicion = { "nombreUsuario": "Leo Velasco", "fecha": "12 mar 2026, 9:40", "contenido": "47 palabras" }, children }) => {
    return (
        <div className="Pop_Content">
            <input type="text" placeholder="Buscar acciones" className="input" />
            <div className="resto">
                <span className="pop_titulo">{titulo}</span>
                {children}
                <div className="separador"></div>
                <div className="info">
                    <span className="pop_titulo">Última edición</span>
                    <div className="usuario">
                        <img src={cat} alt="Profile picture" className="pfp" />
                        <span>{ultimaEdicion.nombreUsuario}</span>
                    </div>
                    <span>{ultimaEdicion.fecha}</span>
                    <span>{ultimaEdicion.contenido}</span>
                </div>
            </div>
        </div>
    )
}

export default Pop_Content