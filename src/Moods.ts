import {Mood} from "./playlist-creator.models";
import sad from './icons/sad.png';
import happy from './icons/happy.png';
import dancey from './icons/dancey.png';
import angry from './icons/angry.png';
import relaxed from './icons/relaxed.png';
import workout from './icons/workout.png';

export const Moods: { [key: string]: Mood } = {
    sad: {
        id: "sad",
        name: "Sad",
        genres: ["rainy-day", "sad"],
        imagePath: sad,
        selected: false,
    },
    happy: {
        id: "happy",
        name: "Happy",
        genres: ["happy"],
        imagePath: happy,
        selected: false,
    },
    dancey: {
        id: "dancey",
        name: "Dancey",
        genres: ["dance", "pop", "party"],
        imagePath: dancey,
        selected: false,
    },
    angry: {
        id: "angry",
        name: "Angry",
        genres: ["metal", "rock", "hard-rock"],
        imagePath: angry,
        selected: false,
    },
    relaxed: {
        id: "relaxed",
        name: "Relaxed",
        genres: ["study", "sleep"],
        imagePath: relaxed,
        selected: false,
    },
    workout: {
        id: "workout",
        name: "Working Out",
        genres: ["work-out"],
        imagePath: workout,
        selected: false,
    }
}