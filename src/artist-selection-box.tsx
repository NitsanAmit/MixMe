import React from "react";
import {observer} from "mobx-react";
import {Artist, Mood} from "./playlist-creator.models";
import {SelectionBox} from "./selection-box";


export const ArtistSelectionBox = observer((props: ArtistSelectionBoxProps) => {

    const {artist, ...otherProps} = props;

    return (
        <SelectionBox
            styles={styles}
            itemId={artist.id}
            backgroundImage={artist.image}
            label={artist.name}
            {...otherProps}
        />
    )
})

interface ArtistSelectionBoxProps {
    artist: Artist;
    isSelected: boolean;
    onItemSelect: (event: any) => void;
}

const styles = {
    backgroundRepeat: "round",
    textShadow: "-1px 1px 1px #434343",
}