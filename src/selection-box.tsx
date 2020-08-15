import {observer} from "mobx-react";
import React, {CSSProperties} from "react";

export const SelectionBox: React.FunctionComponent<SelectionBoxProps> = observer(
    ({styles, itemId, backgroundImage, label, isSelected, onItemSelect}) => {

    const onClick = (event: any) => {
        onItemSelect(event.target.id);
    }

    const boxStyles = {...styles, backgroundImage: `url(${backgroundImage})`};
    return (
        <div id={itemId}
             className={`selection-box${isSelected ? ' selection-box-selected' : ''}`}
             style={boxStyles}
             onClick={onClick}>
            <h3>{label}</h3>
        </div>
    )

})

interface SelectionBoxProps {
    styles: CSSProperties;
    itemId: string;
    backgroundImage: string;
    label: string;
    isSelected: boolean;
    onItemSelect: (event: any) => void;
}