import "../../assets/scss/components/nav/Nav_Item.scss";
import Boton from "../Boton";
import { Popover } from "../popover/Popover";
import Pop_Content from "../popover/Pop_Content";

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
                    <Popover trigger={<Boton icon="more_horiz" />}>
                        <Pop_Content titulo="Página" placement="right-start">
                            <Boton icon="star" texto="Añadir a favoritos" />
                            <div className="separador"></div>
                            <Boton icon="link_2" texto="Copiar enlace" />
                            <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                            <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                            <Boton icon="delete" texto="Mover a la papelera" command="Del" />
                            <div className="separador"></div>
                            <Boton icon="swap_horiz" texto="Convertir en wiki" />
                            <div className="separador"></div>
                            <Boton icon="arrow_outward" texto="Nueva pestaña" command="⌘⇧⏎" />
                            <Boton icon="dock_to_right" texto="Abrir en la ventana lateral" command="⌥Click" />
                        </Pop_Content>
                    </Popover>
                </div>
            </div>
            <div className="Nav_Item_Subitems">
                {children}
            </div>
        </div>
    )
}

export default Nav_Item