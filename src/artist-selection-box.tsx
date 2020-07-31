import React from "react";
import { observer } from "mobx-react";
import {Artist} from "./playlist-creator.models";


export const ArtistSelectionBox = observer(({ artist, isSelected, onItemSelect }: ArtistSelectionBoxProps) => {

    const onClick = (event: any) => {
        onItemSelect(event.target.id);
    }

    const getClassName = () => {
        return `artist-box${isSelected ? ' artist-box-selected' : ''}`
    }

    return (
        <div id={artist.id} className={getClassName()} style={{backgroundImage: `url(${artist.image})`}} onClick={onClick}>
            <h3>{artist.name}</h3>
        </div>
    )
})

interface ArtistSelectionBoxProps {
    artist: Artist;
    isSelected: boolean;
    onItemSelect: (event: any) => void;
}