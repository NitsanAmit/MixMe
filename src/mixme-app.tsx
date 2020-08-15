import React, {useEffect, useState} from "react";
import {PlaylistCreator} from "./playlist-creator";
import {LoginButton} from "./login-button";
import {SpotifyAPI} from "./SpotifyApi";
import "./mixme-app.css"

export const MixMeApp: React.FunctionComponent = () => {
    const [token, setToken] = useState<string>( window.sessionStorage.getItem(TOKEN_STORAGE_KEY) || '');
    const [spotifyApi, setSpotifyApi] = useState();

    const onTokenRevoked = () => {
        window.sessionStorage.clear();
        setToken("");
    };

    useEffect(() => {
        if(token) return;
        const _token = hash.access_token;
        if (_token) {
            window.sessionStorage.setItem(TOKEN_STORAGE_KEY, _token);
            setToken(_token);
        }
    });

    useEffect(() => {
        if(token){
            setSpotifyApi(new SpotifyAPI(token, onTokenRevoked));
            return;
        }
    }, [token]);

    return (<>
        {
            !token && <LoginButton {...loginButtonProps}/>
        }
        {
            (!!token && spotifyApi) && <PlaylistCreator spotifyApi={spotifyApi}/>
        }
    </>);
}

const hash: { access_token: string } = window.location.hash.substring(1).split("&").reduce(function(hashParams, item) {
    if (item) {
        const parts = item.split("=");
        // @ts-ignore
        hashParams[parts[0]] = decodeURIComponent(parts[1]);
    }
    return hashParams;
}, { access_token : "" });

window.location.hash = "";

const loginButtonProps = {
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '5e61cde3295a4274b3160360087dddce',
    redirectUri: "http://localhost:3000",
    scopes: "user-read-currently-playing user-read-playback-state playlist-read-private playlist-read-collaborative user-top-read",
}

const TOKEN_STORAGE_KEY = "token";