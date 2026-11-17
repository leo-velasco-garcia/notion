import "../../assets/scss/components/popover/Popover.scss"


import { useState } from 'react';
import {
    //Cosas de la librería para el comportamiento del modal
    useFloating,
    autoUpdate, //que se actualice su posición al hacer scroll
    offset, // la distancia entre lo que se pulsa y lo que aparece, algo así como gap
    flip, //para que se cambie automáticamente al otro lado cuando no cabe
    shift, //para evitar que se salga por los bordes
    useClick,
    useDismiss, //para poder cerrarlo
    useRole,
    useInteractions,
    FloatingFocusManager,
    FloatingPortal,
} from '@floating-ui/react';
const GAP = 4; //distancia entre el botón y el popover que se suma a lo que mide la flecha


export function Popover({ trigger, children, placement = 'left' }) {
    const [isOpen, setIsOpen] = useState(false);

    // posición
    const {
        refs: { setReference, setFloating },
        floatingStyles,
        context,
    } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        strategy: "fixed",
        whileElementsMounted: autoUpdate, // que se quede pegado al hacer scroll
        middleware: [ //importante el orden del contenido de middleware, porque unas cosas afectan a otras, este es el correcto
            offset(GAP), // separación botón y popover
            flip(),    // cambiar al otro lado
            shift({ padding: 16 }), // para que no se salga por los lados
        ],
    });

    // interacciones
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role,
    ]);

    return (
        <>
            {/* 3. Envolvemos el botón disparador para inyectarle la ref (setReference) y los eventos */}
            {/* CAMBIO AQUÍ: Sustituimos cloneElement por este span para evitar el error de trigger.props y fijar la posición */}
            <span
                ref={setReference}
                style={{ display: 'inline-block' }}
                className={`popover-trigger ${isOpen ? 'is-open' : ''}`}
                {...getReferenceProps()}
            >
                {trigger}
            </span>

            {/* 4. Renderizamos el menú dentro de un Portal cuando esté abierto */}
            {isOpen && (
                <FloatingPortal>
                    <FloatingFocusManager context={context} modal={false}>
                        <div
                            ref={setFloating}
                            className="popover-content"
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            {/* Pasamos una función opcional por si el contenido quiere cerrar el menú */}
                            {typeof children === 'function'
                                ? children({ close: () => setIsOpen(false) })
                                : children}

                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </>
    );
}