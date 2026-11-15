import "../../assets/scss/components/ventana/Ventana.scss";
import Ventana_Header from "./Ventana_Header";
import Ventana_Content from "./Ventana_Content";


const Ventana = () => {

    return (
        <div className="ventana">
            <Ventana_Header/>
            <Ventana_Content/>
            
        </div>
    )
}

export default Ventana