import {Genre} from "./playlist-creator.models";

export const Genres: {[key: string]: Genre} = {
    pop : {
        name: "Pop",
        genres: ["indie-pop", "pop"],
        imagePath: "icons/pop.png",
        selected: false,
    },
    rock : {
        name: "Rock",
        genres: ["rock", "hard-rock","rock-n-roll"],
        imagePath: "icons/rock.png",
        selected: false,
    },
    country : {
        name: "Country",
        genres: ["country"],
        imagePath: "icons/country.png",
        selected: false,
    },
    indie : {
        name: "Indie",
        genres: ["indie", "alternative"],
        imagePath: "icons/indie.png",
        selected: false,
    },
    metal : {
        name: "Metal",
        genres: ["metal", "heavy-metal"],
        imagePath: "icons/metal.png",
        selected: false,
    },
    jazzAndBlues : {
        name: "Jazz",
        genres: ["jazz", "blues"],
        imagePath: "icons/jazz.png",
        selected: false,
    },
    hipHop : {
        name: "Hip Hop",
        genres: ["hip-hop"],
        imagePath: "icons/hip_hop.png",
        selected: false,
    },
    electronic : {
        name: "Electronic",
        genres: ["electro", "electronic", "edm"],
        imagePath: "icons/electronic.png",
        selected: false,
    }
}