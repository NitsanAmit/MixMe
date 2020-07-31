import React, {useEffect, useState} from "react";
import {ArtistPicker} from "./artists-picker";
import { observer } from "mobx-react";
import {SpotifyAPI} from "./SpotifyApi";
import {Artist} from "./playlist-creator.models";

export const PlaylistCreator = observer(({spotifyApi}: { spotifyApi: SpotifyAPI }) => {

    const [topArtists, setTopArtists] = useState<{[key: string] : Artist}>({});
    const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
    // TODO const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

    useEffect(()=> {
        getUserTracks();
    }, [spotifyApi])

    const getUserTracks = () => {
        spotifyApi.getTopArtists()
            .then(artistsList => {
                const artistsMap = artistsList.reduce(function(map: any, artistItem: any) {
                    if(!artistItem.id) return;
                    map[artistItem.id] = {
                        id : artistItem.id,
                        name : artistItem.name,
                        image: artistItem.images[0].url
                    };
                    return map;
                }, {});
                setTopArtists(artistsMap);
            });
    }

    const onArtistSelect = (itemId: string) => {
        if (selectedArtists.includes(itemId) || selectedArtists.length < 3){
            const topArtistsCopy = {...topArtists};
            const selection: Artist = {...topArtists[itemId]};
            selection.selected = !selection.selected;
            topArtistsCopy[itemId] = selection;
            setTopArtists(topArtistsCopy);
            const selectedArtistsCopy = selectedArtists.splice(0);
            if(selection.selected){
                selectedArtistsCopy.push(itemId);
            }else{
                const index = selectedArtistsCopy.indexOf(itemId);
                selectedArtistsCopy.splice(index, 1);
            }
            setSelectedArtists(selectedArtistsCopy);
        }
    }

    return (
        <>
            {
                topArtists && <ArtistPicker artists={topArtists} onItemSelect={onArtistSelect} canContinue={selectedArtists?.length == 3}/>
            }
        </>
    )
})



