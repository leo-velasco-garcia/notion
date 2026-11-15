import "../../assets/scss/components/nav/Nav_SubItem.scss";
import Boton from "../Boton";
const Nav_SubItem = ({ emoji, text, open, onToggle, variant = "default" }) => {
    return (
        variant == "sinSubItems" ?
            <div className={`Nav_SubItem Nav_SubItem--sinSubItems`}>
                <span className="sinSubItems">No hay páginas</span>
            </div> :
            <div className={`Nav_SubItem Nav_SubItem--default${open ? " Nav_SubItem_Open" : ""}`}>
                <div className="Nav_SubItem_Contenido">
                    <span className="Nav_SubItem_Emoji">{emoji}</span>
                    <span className="Nav_SubItem_Text">{text}</span>
                    <Boton icon={"chevron_right"} clase={"Nav_SubItem_Desplegable"} onClick={onToggle}></Boton>
                </div>
                <div className="Nav_SubItem_Actions">
                    <Boton icon={"add"}></Boton>
                    <Boton icon={"more_horiz"}></Boton>
                </div>
            </div>
    )
}

export default Nav_SubItem