import React from "react";
import "./pickers.css"
import { observer } from "mobx-react"
import {ArtistSelectionBox} from "./artist-selection-box";
import {Artist} from "./playlist-creator.models";

export const ArtistPicker: React.FunctionComponent<ArtistPickerProps> = observer(({artists, onItemSelect, canContinue}) =>
    (
        <>
            <h2>Pick your top 3 artists:</h2>
            <div className="picker-container">
                {
                    Object.keys(artists).map((artistId: string) =>
                        artistId && <ArtistSelectionBox key={artistId} artist={artists[artistId]} isSelected={artists[artistId].selected} onItemSelect={onItemSelect}/>)
                }
            </div>
            <button className="mixme-btn" disabled={!canContinue}>Continue ></button>
        </>
    )
);

interface ArtistPickerProps {
    artists: { [key: string]: Artist };
    onItemSelect: (event: any) => void;
    canContinue: boolean;
}
