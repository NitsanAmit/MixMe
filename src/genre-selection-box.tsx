import React from "react";
import {observer} from "mobx-react";
import {Genre} from "./playlist-creator.models";
import {SelectionBox} from "./selection-box";

export const GenreSelectionBox = observer((props: GenreSelectionBoxProps) => {

    const {genre, ...otherProps} = props;

    return (
        <SelectionBox
            styles={styles}
            itemId={genre.id}
            backgroundImage={genre.imagePath}
            label={genre.name}
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

interface GenreSelectionBoxProps {
    genre: Genre;
    isSelected: boolean;
    onItemSelect: (event: any) => void;
}