import React, {useEffect, useState} from "react";
import {ArtistPicker} from "./artists-picker";
import {observer} from "mobx-react";
import {SpotifyAPI} from "./SpotifyApi";
import {Artist, Mood} from "./playlist-creator.models";
import {MoodPicker} from "./mood-picker";
import {Moods} from "./Moods";
import {GenrePicker} from "./genre-picker";
import {Genres} from "./Genre";


export const PlaylistCreator: React.FunctionComponent<{ spotifyApi: SpotifyAPI }> = observer(({spotifyApi}) => {

    const {step, topArtists, moods, genres, onArtistSelect, onMoodSelect, onGenreSelect, canContinue, onContinue} = GetPlaylistCreatorState(spotifyApi);

    return (
        <>
            {
                (step === 0 && topArtists) && <ArtistPicker artists={topArtists} onItemSelect={onArtistSelect}/>
            }
            {
                step === 1 && <MoodPicker moods={moods} onItemSelect={onMoodSelect}/>
            }
            {
                step === 2 && <GenrePicker genres={genres} onItemSelect={onGenreSelect}/>
            }
            <button className="mixme-btn" disabled={canContinue()} onClick={onContinue}>Continue ></button>
        </>
    )
})

const GetPlaylistCreatorState = (spotifyApi: SpotifyAPI) => {
    const [step, setStep] = useState(0);
    const [topArtists, setTopArtists] = useState<{ [key: string]: Artist }>({});
    const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
    const [moods, setMoods] = useState({...Moods});
    const [selectedMood, setSelectedMood] = useState<string>();
    const [genres, setGenres] = useState({...Genres});
    const [selectedGenre, setSelectedGenre] = useState<string>();

    useEffect(() => {
        getUserTracks();
    }, [spotifyApi])

    const getUserTracks = () => {
        spotifyApi.getTopArtists()
            .then(artistsList => {
                const artistsMap = artistsList.reduce(function (map: any, artistItem: any) {
                    if (!artistItem.id) return;
                    map[artistItem.id] = {
                        id: artistItem.id,
                        name: artistItem.name,
                        image: artistItem.images[0].url
                    };
                    return map;
                }, {});
                setTopArtists(artistsMap);
            });
    }

    const onArtistSelect = (itemId: string) => {
        if (!topArtists[itemId]) return;
        if (itemId && (selectedArtists.includes(itemId) || selectedArtists.length < 3)) {
            const topArtistsCopy = {...topArtists};
            const selection: Artist = {...topArtists[itemId]};
            selection.selected = !selection.selected;
            topArtistsCopy[itemId] = selection;
            setTopArtists(topArtistsCopy);
            const selectedArtistsCopy = selectedArtists.splice(0);
            if (selection.selected) {
                selectedArtistsCopy.push(itemId);
            } else {
                const index = selectedArtistsCopy.indexOf(itemId);
                selectedArtistsCopy.splice(index, 1);
            }
            setSelectedArtists(selectedArtistsCopy);
        }
    }

    const onMoodSelect = (itemId: string) => {
        if (!moods[itemId]) return;
        const moodsCopy = {...moods};
        moodsCopy[itemId].selected = !moodsCopy[itemId].selected;
        if (selectedMood && selectedMood !== itemId) {
            moodsCopy[selectedMood].selected = !moodsCopy[itemId].selected;
        }
        setSelectedMood(selectedMood === itemId ? "" : itemId);
        setMoods(moods);
    }

    const onGenreSelect = (itemId: string) => {
        if (!genres[itemId]) return;
        const genresCopy = {...genres};
        genresCopy[itemId].selected = !genresCopy[itemId].selected;
        if (selectedGenre && selectedGenre !== itemId) {
            genresCopy[selectedGenre].selected = !genresCopy[itemId].selected;
        }
        setSelectedGenre(selectedGenre === itemId ? "" : itemId);
        setGenres(genres);
    }

    const canContinue = (): boolean => {
        if (step === 0) {
            return selectedArtists?.length !== 3;
        } else if (step === 1) {
            return !selectedMood;
        }
        return true;
    }

    const onContinue = () => {
        setStep(step + 1);
    }
    return {step, topArtists, getUserTracks, moods, genres, onArtistSelect, onMoodSelect, onGenreSelect, canContinue, onContinue};
}





