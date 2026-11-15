import "../../assets/scss/components/nav/Nav_Item.scss";
import Boton from "../Boton";

const Nav_Item = ({ emoji, text, itemOpen, onToggle, children }) => {
    return (
        <div className={`Nav_Item${itemOpen ? " Nav_Item_Open" : ""}`}>
            <div className="Nav_Item_resto">
                <div className="Nav_Item_Contenido">
                    <span className="Nav_Item_Icon">
                        <span className="Nav_Item_Emoji">{emoji}</span>
                        <Boton icon={"arrow_forward_ios"} clase={"Nav_Item_Desplegable"} onClick={onToggle}></Boton>
                    </span>
                    <span className="Nav_Item_Text">{text}</span>
                </div>
                <div className="Nav_Item_Actions">
                    <Boton icon={"add"}></Boton>
                    <Boton icon={"more_horiz"}></Boton>
                </div>
            </div>
            <div className="Nav_Item_Subitems">
                {children}
            </div>
        </div>
    )
}

export default Nav_Item