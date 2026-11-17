import "../../assets/scss/components/nav/Nav_Footer.scss"
import Boton from "../Boton"
import Pop_Content from "../popover/Pop_Content"
import { Popover } from "../popover/Popover"

const Nav_Footer = () => {
    return (
        <footer className="Nav_Footer">
            <Popover placement="top" trigger={<Boton clase="Nav_Footer_GranBtn" icon="keyboard_arrow_down" texto="Notion de Leo Velasco García"><span className="icono">N</span></Boton>}>
                        <Pop_Content titulo="Página" placement="right-start" variant="Nav_Footer">
                            <Boton icon="upgrade" texto="Mejorar tu plan" />
                            <Boton icon="settings" texto="Configuración" />
                            <Boton icon="mail" texto="Invitar a miembros" />
                            <Boton icon="person_add" texto="Añadir cuenta" />
                            <div className="separador"></div>
                            <span className="pop_titulo">maildeejemplo@mail.com</span>
                            <Boton clase="Nav_Footer_GranBtn" texto="Notion de Otra persona"><span className="icono">N</span></Boton>
                            <Boton clase="Nav_Footer_GranBtn" texto="Notion de Leo Velasco García" secondIcon="done"><span className="icono">N</span></Boton>
                            <Boton clase="Nav_Footer_GranBtn" texto="Notion de Otra persona"><span className="icono">N</span></Boton>
                            <Boton icon="add" texto="Nuevo espacio de trabajo" />
                            <div className="separador"></div>
                            <Boton texto=" ">
                                <span className="pop_titulo">Cerrar sesión</span>
                            </Boton>
                        </Pop_Content>
                    </Popover>
            <div className="Nav_Footer_Actions">
                <Boton icon={"help"}></Boton>
                <Boton icon={"view_cozy"}></Boton>
            </div>
        </footer>
    )
}

export default Nav_Footer