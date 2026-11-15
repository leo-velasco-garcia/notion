import "../../assets/scss/components/ventana/Ventana_Content.scss"
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import Ventana_Item from "./Ventana_Item";
import Cat from "../../assets/imgs/cat.jpg";

const Ventana_Content = () => {
    const { itemsPag } = useContext(AppContext);
    return (
        <div className="Ventana_Content">
            <Ventana_Item texto={itemsPag[0].texto} tipo={itemsPag[0].tipo} icono={itemsPag[0].icono} img={Cat} imgAlt={itemsPag[0].imgAlt}/>
            <div className="Ventana_Centradora">
                {itemsPag.map((item, itemIndex) => (
                    itemIndex > 0 ? <Ventana_Item texto={item.texto} tipo={item.tipo} icono={item.icono} key={itemIndex} /> : ""
                ))}
            </div>
        </div>
    )
}

export default Ventana_Content