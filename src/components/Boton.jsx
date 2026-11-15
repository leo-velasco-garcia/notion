import "../assets/scss/components/Boton.scss"

const Boton = ({ icon, secondIcon, texto, clase, onClick, command, variant = "normal", children }) => {
    return (
        <button className={`compBtn compBtn--${variant} ${clase} ${texto ? "btnTxt" : "btnNoTxt"}`} onClick={onClick}>
            {children}
            <div className="principal">
                {icon ? <span className="material-symbols-outlined">
                    {icon}
                </span> : ""}
                {texto ? <span className="textoBoton">
                    {texto}
                </span> : ""}
            </div>
            {command ? <span className="command">
                {command}
            </span> : ""}
            {secondIcon ? <span className="material-symbols-outlined">
                {secondIcon}
            </span> : ""}

        </button>
    )
}

export default Boton