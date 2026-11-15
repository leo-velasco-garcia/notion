import "../../assets/scss/components/ventana/Ventana_Item.scss"
import Boton from "../Boton";
import Pop_Content from "../popover/Pop_Content";
import { Popover } from "../popover/Popover";
const Ventana_Item = ({ texto, icono, tipo, img, imgAlt }) => {
    switch (tipo) {
        case "Header":
            return (
                <header className={img ? "Ventana_Item Pag_Header Pag_Header_Contenido" : "Ventana_Item Pag_Header Pag_Header_Hueco"} >
                    {img ? <figure className="Pag_Header_Figure Pag_Header_Figure_Contenido">
                        <img className="Pag_Header_Img" src={img} alt={imgAlt} />
                    </figure> : <figure className="Pag_Header_Figure Pag_Header_Figure_Hueco">
                    </figure>}
                    <div className="Pag_Header_Contenido">
                        <span className="Pag_Header_Icono">{icono}</span>
                        <div className="Pag_Header_Botones">
                            {img ? "" : <Boton icon="image" texto="Añadir portada" />}
                            <Boton icon="comment" texto="Añadir texto" />
                        </div>
                        <h1>{texto}</h1>
                    </div>
                </header>
            )
        case "pag":
            return (
                <div className="Ventana_Item Ventana_Pag">
                    <div className="izquierda">
                        <Boton icon="add" clase="izq" />
                        <Popover trigger={<Boton icon="drag_indicator" clase="izq" />}>
                            <Pop_Content titulo="Página">
                                <Boton icon="swap_horiz" texto="Convertir en" secondIcon="arrow_forward_ios" />
                                <Boton icon="imagesearch_roller" texto="Color" secondIcon="arrow_forward_ios" />
                                <Boton icon="sentiment_satisfied" texto="Editar icono" />
                                <Boton icon="star" texto="Añadir a favoritos" />
                                <Boton icon="edit_square" texto="Renombrar" command="⌘⇧R" />
                                <div className="separador"></div>
                                <Boton icon="arrow_outward" texto="Nueva pestaña" command="⌘⇧⏎" />
                                <Boton icon="dock_to_right" texto="Abrir en la ventana lateral" command="⌥Click" />
                                <div className="separador"></div>
                                <Boton icon="link_2" texto="Copiar enlace" />
                                <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                                <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                                <Boton icon="delete" texto="Mover a la papelera" command="Del"/>
                                <div className="separador"></div>
                                <Boton icon="face" texto="Pedir a la IA" command="⌘J" />
                            </Pop_Content>
                        </Popover>
                    </div>
                    <div className="derecha">
                        <a className="Ventana_Pag_Enlace">
                            <span className="Ventana_Pag_Icono">{icono}</span>
                            <span className="Ventana_Pag_Texto">{texto}</span>
                        </a>
                    </div>
                </div>
            )
        case "h1":
            return (
                <div className="Ventana_Item Ventana_Uno">
                    <div className="izquierda">
                        <Boton icon="add" clase="izq" />
                        <Popover trigger={<Boton icon="drag_indicator" clase="izq" />}>
                            <Pop_Content titulo="Encabezado 1">
                                <Boton icon="swap_horiz" texto="Convertir en" secondIcon="arrow_forward_ios" />
                                <Boton icon="imagesearch_roller" texto="Color" secondIcon="arrow_forward_ios" />
                                <div className="separador"></div>
                                <Boton icon="link_2" texto="Copiar enlace" />
                                <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                                <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                                <Boton icon="delete" texto="Mover a la papelera" command="Del"/>
                                <div className="separador"></div>
                                <Boton icon="comment" texto="Comentar" command="⌘⇧M" />
                                <Boton icon="rate_review" texto="Sugerir cambios" command="⌘⇧⌥X" />
                                <div className="separador"></div>
                                <Boton icon="face" texto="Pedir a la IA" command="⌘J" />
                            </Pop_Content>
                        </Popover>
                    </div>
                    <div className="derecha">
                        <h1 className="Ventana_Uno_Texto">{texto}</h1>
                    </div>
                </div>
            )
        case "h2":
            return (
                <div className="Ventana_Item Ventana_Dos">
                    <div className="izquierda">
                        <Boton icon="add" clase="izq" />
                        <Popover trigger={<Boton icon="drag_indicator" clase="izq" />}>
                            <Pop_Content titulo="Encabezado 2">
                                <Boton icon="swap_horiz" texto="Convertir en" secondIcon="arrow_forward_ios" />
                                <Boton icon="imagesearch_roller" texto="Color" secondIcon="arrow_forward_ios" />
                                <div className="separador"></div>
                                <Boton icon="link_2" texto="Copiar enlace" />
                                <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                                <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                                <Boton icon="delete" texto="Mover a la papelera" command="Del"/>
                                <div className="separador"></div>
                                <Boton icon="comment" texto="Comentar" command="⌘⇧M" />
                                <Boton icon="rate_review" texto="Sugerir cambios" command="⌘⇧⌥X" />
                                <div className="separador"></div>
                                <Boton icon="face" texto="Pedir a la IA" command="⌘J" />
                            </Pop_Content>
                        </Popover>
                    </div>
                    <div className="derecha">
                        <h2 className="Ventana_Dos_Texto">{texto}</h2>
                    </div>
                </div>
            )

        case "h3":
            return (
                <div className="Ventana_Item Ventana_Tres">
                    <div className="izquierda">
                        <Boton icon="add" clase="izq" />
                        <Popover trigger={<Boton icon="drag_indicator" clase="izq" />}>
                            <Pop_Content titulo="Encabezado 3">
                                <Boton icon="swap_horiz" texto="Convertir en" secondIcon="arrow_forward_ios" />
                                <Boton icon="imagesearch_roller" texto="Color" secondIcon="arrow_forward_ios" />
                                <div className="separador"></div>
                                <Boton icon="link_2" texto="Copiar enlace" />
                                <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                                <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                                <Boton icon="delete" texto="Mover a la papelera" command="Del"/>
                                <div className="separador"></div>
                                <Boton icon="comment" texto="Comentar" command="⌘⇧M" />
                                <Boton icon="rate_review" texto="Sugerir cambios" command="⌘⇧⌥X" />
                                <div className="separador"></div>
                                <Boton icon="face" texto="Pedir a la IA" command="⌘J" />
                            </Pop_Content>
                        </Popover>
                    </div>
                    <div className="derecha">
                        <h3 className="Ventana_Tres_Texto">{texto}</h3>
                    </div>
                </div>
            )

        case "h4":
            return (
                <div className="Ventana_Item Ventana_Cuatro">
                    <div className="izquierda">
                        <Boton icon="add" clase="izq" />
                        <Popover trigger={<Boton icon="drag_indicator" clase="izq" />}>
                            <Pop_Content titulo="Encabezado 4">
                                <Boton icon="swap_horiz" texto="Convertir en" secondIcon="arrow_forward_ios" />
                                <Boton icon="imagesearch_roller" texto="Color" secondIcon="arrow_forward_ios" />
                                <div className="separador"></div>
                                <Boton icon="link_2" texto="Copiar enlace" />
                                <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                                <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                                <Boton icon="delete" texto="Mover a la papelera" command="Del"/>
                                <div className="separador"></div>
                                <Boton icon="comment" texto="Comentar" command="⌘⇧M" />
                                <Boton icon="rate_review" texto="Sugerir cambios" command="⌘⇧⌥X" />
                                <div className="separador"></div>
                                <Boton icon="face" texto="Pedir a la IA" command="⌘J" />
                            </Pop_Content>
                        </Popover>
                    </div>
                    <div className="derecha">
                        <h4 className="Ventana_Cuatro_Texto">{texto}</h4>
                    </div>
                </div>
            )

        default:
            return (
                <div className="Ventana_Item Ventana_P">
                    <div className="izquierda">
                        <Boton icon="add" clase="izq" />
                        <Popover trigger={<Boton icon="drag_indicator" clase="izq" />}>
                            <Pop_Content titulo="Texto">
                                <Boton icon="swap_horiz" texto="Convertir en" secondIcon="arrow_forward_ios" />
                                <Boton icon="imagesearch_roller" texto="Color" secondIcon="arrow_forward_ios" />
                                <div className="separador"></div>
                                <Boton icon="link_2" texto="Copiar enlace" />
                                <Boton icon="content_copy" texto="Duplicar" command="⌘D" />
                                <Boton icon="arrow_top_right" texto="Mover a" command="⌘⇧P" />
                                <Boton icon="delete" texto="Mover a la papelera" command="Del"/>
                                <div className="separador"></div>
                                <Boton icon="comment" texto="Comentar" command="⌘⇧M" />
                                <Boton icon="rate_review" texto="Sugerir cambios" command="⌘⇧⌥X" />
                                <div className="separador"></div>
                                <Boton icon="face" texto="Pedir a la IA" command="⌘J" />
                            </Pop_Content>
                        </Popover>
                    </div>
                    <div className="derecha">
                        <p className="Ventana_P_Texto">{texto}</p>
                    </div>
                </div>
            )
    }

}

export default Ventana_Item