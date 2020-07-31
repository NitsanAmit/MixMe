import {observable} from "mobx";

export class Artist {
    public id: string = "";
    public name: string = "";
    public image: string = "";

    @observable
    public selected: boolean = false;
}

export class Mood {
    public name: string = "";
    public genres: string[] = [];
    public imagePath: string = "";

    @observable
    public selected: boolean = false;
}

export class Genre {
    public name: string = "";
    public genres: string[] = [];
    public imagePath: string = "";

    @observable
    public selected: boolean = false;
}
