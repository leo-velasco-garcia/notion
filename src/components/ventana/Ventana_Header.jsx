import "../../assets/scss/components/ventana/Ventana_Header.scss"
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Boton from "../Boton"
import { Popover } from "../popover/Popover";
import Pop_Content from "../popover/Pop_Content";
import { SubPopover } from "../popover/SubPopover";

const Ventana_Header = () => {
    const { navAbierto, setNavAbierto } = useContext(AppContext);
    return (
        <header className="Ventana_Header">
            <div className="Ventana_Header_Izq">
                <Boton clase={navAbierto ? "desaparece" : ""} icon={"side_navigation"} onClick={() => setNavAbierto(!navAbierto)}></Boton>
                <span className="Ventana_Header_Spans">🪦 TFG</span>
            </div>
            <div className="Ventana_Header_Dch">
                <span className="Ventana_Header_Spans">Última edición: Hace 2 d</span>
                <Boton icon="star"></Boton>
                <Popover placement="bottom-end" trigger={<Boton icon="more_horiz"></Boton>}>
                    <Pop_Content titulo="Encabezado 2" variant="header">
                        <Boton icon="link_2" texto="Copiar enlace" command="⌘⌥L" />
                        <Boton icon="content_paste" texto="Copiar contenido de la página" />
                        <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                        <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                        <Boton icon="history" texto="Historial de versiones" />
                        <Boton icon="schedule" texto="Actualizaciones y estadísticas" />

                        <div className="separador"></div>
                        
                        <SubPopover trigger={<Boton icon="font_download" texto="Apariencia y diseño" secondIcon="arrow_forward_ios" />}>
                            <Pop_Content titulo="Encabezado 2" variant="Nav_Footer">
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                            </Pop_Content>
                        </SubPopover>
                        <div className="separador"></div>
                        <SubPopover trigger={<Boton icon="face" texto="Usar con la IA" secondIcon="arrow_forward_ios" />}>
                            <Pop_Content titulo="Encabezado 2" variant="Nav_Footer">
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                            </Pop_Content>
                        </SubPopover>
                        <div className="separador"></div>
                        <Boton icon="rate_review" texto="Sugerir cambios" command="⌘⇧⌥X" />
                        <SubPopover trigger={<Boton icon="notifications" texto="Notificarme" command="Comentarios" secondIcon="arrow_forward_ios" />}>
                            <Pop_Content titulo="Encabezado 2" variant="Nav_Footer">
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                            </Pop_Content>
                        </SubPopover>
                        <div className="separador"></div>
                        <SubPopover trigger={<Boton icon="lock_open" texto="Bloquear página" secondIcon="arrow_forward_ios" />}>
                            <Pop_Content titulo="Encabezado 2" variant="Nav_Footer">
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                            </Pop_Content>
                        </SubPopover>
                        <Boton icon="delete" texto="Mover a la papelera" command="Del" />

                        <div className="separador"></div>
                        <SubPopover trigger={<Boton icon="more_horiz" texto="Más" secondIcon="arrow_forward_ios" />}>
                            <Pop_Content titulo="Encabezado 2" variant="Nav_Footer">
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                                <Boton icon="add" texto="Opción de ejemplo"/>
                            </Pop_Content>
                        </SubPopover>
                    </Pop_Content>
                </Popover>
            </div>
        </header>
    )
}

export default Ventana_Header