export class User {
    public id: number

    constructor(
        public name: string, 
        public age: number,
    ){
        this.id = Math.floor((new Date).getTime())
    }
}