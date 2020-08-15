import {Genre} from "./playlist-creator.models";
import pop from './icons/pop.png';
import rock from './icons/rock.png';
import country from './icons/country.png';
import indie from './icons/indie.png';
import metal from './icons/metal.png';
import jazz from './icons/jazz.png';
import hipHop from './icons/hip_hop.png';
import electronic from './icons/electronic.png';

export const Genres: {[key: string]: Genre} = {
    pop : {
        id: "pop",
        name: "Pop",
        genres: ["indie-pop", "pop"],
        imagePath: pop,
        selected: false,
    },
    rock : {
        id: "rock",
        name: "Rock",
        genres: ["rock", "hard-rock","rock-n-roll"],
        imagePath: rock,
        selected: false,
    },
    country : {
        id: "country",
        name: "Country",
        genres: ["country"],
        imagePath: country,
        selected: false,
    },
    indie : {
        id: "indie",
        name: "Indie",
        genres: ["indie", "alternative"],
        imagePath: indie,
        selected: false,
    },
    metal : {
        id: "metal",
        name: "Metal",
        genres: ["metal", "heavy-metal"],
        imagePath: metal,
        selected: false,
    },
    jazzAndBlues : {
        id: "jazzAndBlues",
        name: "Jazz & Blues",
        genres: ["jazz", "blues"],
        imagePath: jazz,
        selected: false,
    },
    hipHop : {
        id: "hipHop",
        name: "Hip Hop",
        genres: ["hip-hop"],
        imagePath: hipHop,
        selected: false,
    },
    electronic : {
        id: "electronic",
        name: "Electronic",
        genres: ["electro", "electronic", "edm"],
        imagePath: electronic,
        selected: false,
    }
}