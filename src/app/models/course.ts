import { Skill } from "./skill";
import { Creator } from "./creator"

export class Course{
    id: number;
    courseName: String;
    description: String;
    prerequesite: String;
    lastupdated: String;
    feedback: String;
    location: String;
    skill: Array<Skill>;
    creator: Array<Creator>;

    constructor(){
        this.courseName="";
        this.description = "";
        this.prerequesite = "";
        this.lastupdated = "";
        this.feedback = "";
        this.location = "";
        this.skill = [];
        this.creator = [];
    }
}