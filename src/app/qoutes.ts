export class Qoutes {
    showDescription: boolean;
    constructor(public author: string, public name: string, public Quote: string, public completeDate: Date, public upVote: number , public dnVote: number){
        this.showDescription=false;
    }
}
