import "../../assets/scss/components/nav/Nav_SubItem.scss";
import Boton from "../Boton";
import Pop_Content from "../popover/Pop_Content";
import { Popover } from "../popover/Popover";
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
    )
}

export default Nav_SubItem