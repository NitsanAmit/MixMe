import React from "react";
import {observer} from "mobx-react";
import {Mood} from "./playlist-creator.models";
import {SelectionBox} from "./selection-box";


export const MoodSelectionBox = observer((props: MoodSelectionBoxProps) => {

    const {mood, ...otherProps} = props;

    return (
        <SelectionBox
            styles={styles}
            itemId={mood.id}
            backgroundImage={mood.imagePath}
            label={mood.name}
            {...otherProps}
        />
    )
})

const styles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: 80,
    backgroundPosition: "center",
    backgroundColor: "white",
    color: "#ff7676",
    textShadow: "-1px 1px 1px #d1d1d1",
}

interface MoodSelectionBoxProps {
    mood: Mood;
    isSelected: boolean;
    onItemSelect: (event: any) => void;
}