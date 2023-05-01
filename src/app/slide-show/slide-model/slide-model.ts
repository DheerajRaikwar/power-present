export class Slide{
    public title : String
    public description : String
    public pn : number;
    public static pageno = 0;

    constructor(title:String,description:String){
        this.title = title;
        this.description =description;        
        this.pn = Slide.pageno++;
    }
}