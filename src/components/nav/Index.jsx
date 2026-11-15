import "../../assets/scss/components/nav/Nav.scss";
import { useContext, useState } from "react";
import Nav_Header from "./Nav_Header";
import Nav_Footer from "./Nav_Footer";
import Nav_Section from "./Nav_Section";
import Nav_Item from "./Nav_Item";
import Nav_SubItem from "./Nav_SubItem";
import { AppContext } from '../../context/AppContext';

const Nav = () => {
    const { itemsNav: initialItemsNav } = useContext(AppContext);
    const [itemsNav, setItemsNav] = useState(initialItemsNav);

    const toggleSection = (sectionIndex) => {
        setItemsNav((sections) =>
            sections.map((section, currentSectionIndex) =>
                currentSectionIndex !== sectionIndex
                    ? section
                    : {
                        ...section, sectionOpen: !section.sectionOpen
                    }
            )
        );
    };

    const toggleItem = (sectionIndex, itemIndex) => {
        setItemsNav((sections) =>
            sections.map((section, currentSectionIndex) =>
                currentSectionIndex !== sectionIndex
                    ? section
                    : {
                        ...section,
                        items: section.items.map((item, currentItemIndex) =>
                            currentItemIndex !== itemIndex
                                ? item
                                : { ...item, itemOpen: !item.itemOpen }
                        )
                    }
            )
        );
    };

    return (
        <div className="nav-container">
            <div className="Nav">
                <div className="todoMenosFooter">
                    <Nav_Header></Nav_Header>
                    <div className="secciones">
                        {itemsNav.map((section, sectionIndex) => (
                            <Nav_Section
                                key={`${section.sectionTitle}-${sectionIndex}`}
                                sectionTitle={section.sectionTitle}
                                sectionOpen={section.sectionOpen}
                                onToggle={() => toggleSection(sectionIndex)}
                            >
                                {section.sectionOpen && section.items.map((item, itemIndex) => (
                                    <Nav_Item
                                        key={`${item.texto}-${itemIndex}`}
                                        emoji={item.emoji}
                                        text={item.texto}
                                        itemOpen={item.itemOpen}
                                        onToggle={() => toggleItem(sectionIndex, itemIndex)}
                                    >

                                        {item.itemOpen && (
                                            <>
                                                {item.subitems?.map((subitem, subitemIndex) => (
                                                    <Nav_SubItem
                                                        key={`${subitem.texto}-${subitemIndex}`}
                                                        emoji={subitem.emoji}
                                                        text={subitem.texto}
                                                    />
                                                ))}

                                                {!item.subitems && (
                                                    <Nav_SubItem
                                                        variant="sinSubItems"
                                                    />
                                                )}
                                            </>
                                        )}

                                    </Nav_Item>
                                ))}
                            </Nav_Section>
                        ))}
                    </div>
                </div>
                <Nav_Footer />
            </div>
        </div>
    )
}

export default Nav