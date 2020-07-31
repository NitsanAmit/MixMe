import React from "react";
import "./pickers.css"
import { observer } from "mobx-react"
import {MoodSelectionBox} from "./mood-selection-box";
import {Mood} from "./playlist-creator.models";

export const MoodPicker: React.FunctionComponent<MoodPickerProps> = observer(({moods, onItemSelect, canContinue}) =>
    (
        <>
            <h2>Pick your Mood:</h2>
            <div className="picker-container">
                {
                    Object.keys(moods).map((moodId: string) =>
                        moodId && <MoodSelectionBox key={moodId} mood={moods[moodId]} isSelected={moods[moodId].selected} onItemSelect={onItemSelect}/>)
                }
            </div>
            <button className="mixme-btn" disabled={!canContinue}>Continue ></button>
        </>
    )
);

interface MoodPickerProps {
    moods: { [key: string]: Mood };
    onItemSelect: (event: any) => void;
    canContinue: boolean;
}
