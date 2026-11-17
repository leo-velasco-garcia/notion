import "../../assets/scss/components/popover/SubPopover.scss";
import { useState } from "react";

import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    safePolygon,
    FloatingPortal,
} from "@floating-ui/react";

const GAP = 12;

export function SubPopover({
    trigger,
    children,
    placement = "left-start",
    openOnHover = true,
    openOnClick = true,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        refs: { setReference, setFloating },
        floatingStyles,
        context,
    } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        strategy: "fixed",
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(GAP),
            flip(),
            shift({ padding: 8 }),
        ],
    });

    // Hover
    const hover = useHover(context, {
        enabled: openOnHover,
        handleClose: safePolygon({
            buffer: 1,
        }),
    });

    // Click
    const click = useClick(context, {
        enabled: openOnClick,
        toggle: true,
    });

    const dismiss = useDismiss(context);
    const role = useRole(context, {
        role: "menu",
    });

    const {
        getReferenceProps,
        getFloatingProps,
    } = useInteractions([
        hover,
        click,
        dismiss,
        role,
    ]);

    return (
        <>
            <div
                ref={setReference}
                className={`submenu-trigger ${isOpen ? "is-open" : ""}`}
                {...getReferenceProps()}
            >
                {trigger}
            </div>

            {isOpen && (
                <FloatingPortal>
                    <div
                        ref={setFloating}
                        className="submenu-content"
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        {children}
                    </div>
                </FloatingPortal>
            )}
        </>
    );
}
