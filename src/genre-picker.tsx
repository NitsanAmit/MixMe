import React from "react";
import "./pickers.css"
import {observer} from "mobx-react"
import {MoodSelectionBox} from "./mood-selection-box";
import {Genre} from "./playlist-creator.models";

export const GenrePicker: React.FunctionComponent<GenrePickerProps> = observer(({genres, onItemSelect}) =>
    (
        <>
            <h2>Pick your Genre:</h2>
            <div className="picker-container">
                {
                    Object.keys(genres).map((genreId: string) =>
                        genreId &&
                        <MoodSelectionBox key={genreId} mood={genres[genreId]} isSelected={genres[genreId].selected}
                                          onItemSelect={onItemSelect}/>)
                }
            </div>
        </>
    )
);

interface GenrePickerProps {
    genres: { [key: string]: Genre };
    onItemSelect: (event: any) => void;
}
