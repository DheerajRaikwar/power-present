export class Slide{
    public title : String
    public description : String
    public pageno : number

    constructor(title:String,description:String,pageno:number){
        this.title = title;
        this.description =description;
        this.pageno = pageno
    }
}