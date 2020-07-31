import React from "react";


export const LoginButton = ({authEndpoint, clientId, redirectUri, scopes}: LoginButtonProps) => (
    <a className="no-decorations"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`}>
        <button className="mixme-btn">Login to Spotify</button>
    </a>
);

interface LoginButtonProps {
    authEndpoint: string;
    clientId: string;
    redirectUri: string;
    scopes: string;
}