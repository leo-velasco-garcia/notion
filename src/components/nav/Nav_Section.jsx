import "../../assets/scss/components/nav/Nav_Section.scss";
import Boton from "../Boton";

const Nav_Section = ({ children, sectionTitle, sectionOpen, onToggle }) => {
    return (
        <div className={`Nav_Section${sectionOpen ? " Nav_Section_Open" : ""}`}>
            <div className="Nav_Section_Header">
                <div className="Nav_Section_Header_Izq">
                    <h4>{sectionTitle}</h4>
                    <Boton icon={"chevron_right"} clase={"Nav_Section_Header_Desplegable"} onClick={onToggle}></Boton>
                </div>
                <div className="Nav_Section_Header_Dch">
                    <Boton icon={"arrow_outward"} clase={"Nav_Section_Header_Action"}></Boton>
                    <Boton icon={"add"} clase={"Nav_Section_Header_Action"}></Boton>
                    <Boton icon={"more_horiz"} clase={"Nav_Section_Header_Action"}></Boton>
                </div>
            </div>
            <div className="Nav_Section_Resto">
                {children}
            </div>
        </div>
    )
}

export default Nav_Section