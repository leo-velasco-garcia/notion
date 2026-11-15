import "../../assets/scss/components/nav/Nav_Footer.scss"
import Boton from "../Boton"

const Nav_Footer = () => {
    return (
        <footer className="Nav_Footer">
            <Boton clase="Nav_Footer_GranBtn" icon="keyboard_arrow_down" texto="Notion de Leo Velasco García"><span className="icono">N</span></Boton>
            <div className="Nav_Footer_Actions">
                <Boton icon={"help"}></Boton>
                <Boton icon={"view_cozy"}></Boton>
            </div>
        </footer>
    )
}

export default Nav_Footer