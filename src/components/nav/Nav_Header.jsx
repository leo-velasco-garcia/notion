import "../../assets/scss/components/nav/Nav_Header.scss";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Boton from "../Boton";

const Nav_Header = () => {
    const { navAbierto, setNavAbierto } = useContext(AppContext);

    return (
        <div className="Nav_Header">
            <div className="primeraLinea">
                <div className="dcha">
                    <Boton icon={"inbox"}></Boton>
                    <Boton icon={"edit_square"}></Boton>
                </div>
                <Boton icon={"side_navigation"} onClick={() => setNavAbierto(!navAbierto)}></Boton>
            </div>
            <div className="segundaLinea">
                <input type="search" placeholder="Buscar o preguntar" />
                <Boton texto={"⌘K"}></Boton>
            </div>
            <div className="terceraLinea">
                <Boton icon={"home"} texto={"Inicio"} variant="conFondo"></Boton>
                <Boton icon={"chat_bubble"}></Boton>
                <Boton icon={"calendar_today"}></Boton>
            </div>
        </div>
    )
}

export default Nav_Header