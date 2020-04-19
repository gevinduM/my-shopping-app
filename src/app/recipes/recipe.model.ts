export class Recipe{

    public name : string;
    public description : string;
    public imagepath : string;
    
    constructor(name:string, des:string, imgePath:string){
        this.name = name;
        this.description = des;
        this.imagepath = imgePath;
    }
}