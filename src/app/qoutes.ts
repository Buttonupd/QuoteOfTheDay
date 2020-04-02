export class Qoutes {
    showDescription: boolean;
    constructor(public author: string, public name: string, public Quote: string, public completeDate: Date, public upVote, public dnVote){
        this.showDescription=false;
    }
}
