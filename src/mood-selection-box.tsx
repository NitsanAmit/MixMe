import React from "react";
import { observer } from "mobx-react";
import {Mood} from "./playlist-creator.models";


export const MoodSelectionBox = observer(({ mood, isSelected, onItemSelect }: MoodSelectionBoxProps) => {

    const onClick = (event: any) => {
        onItemSelect(event.target.id);
    }

    const getClassName = () => {
        return `artist-box${isSelected ? ' artist-box-selected' : ''}`
    }

    return (
        <div id={mood.name} className={getClassName()} style={{backgroundImage: mood.imagePath}} onClick={onClick}>
            <h3>{mood.name}</h3>
        </div>
    )
})

interface MoodSelectionBoxProps {
    mood: Mood;
    isSelected: boolean;
    onItemSelect: (event: any) => void;
}