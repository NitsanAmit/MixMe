import {Mood} from "./playlist-creator.models";

export const Moods: {[key: string]: Mood} = {
    sad : {
        name: "Sad",
        genres: ["rainy-day", "sad"],
        imagePath: "icons/pop.png",
        selected: false,
    },
    happy : {
        name: "Happy",
        genres: ["happy"],
        imagePath: "icons/pop.png",
        selected: false,
    },
    dancey : {
        name: "Dancey",
        genres: ["dance", "pop", "party"],
        imagePath: "icons/pop.png",
        selected: false,
    },
    Angry : {
        name: "Angry",
        genres: ["metal", "rock", "hard-rock"],
        imagePath: "icons/pop.png",
        selected: false,
    },
    relaxed : {
        name: "Relaxed",
        genres: ["study", "sleep"],
        imagePath: "icons/pop.png",
        selected: false,
    },
    workout : {
        name: "Working Out",
        genres: ["work-out"],
        imagePath: "icons/pop.png",
        selected: false,
    }
}