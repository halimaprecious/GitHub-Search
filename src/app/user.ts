export class User {
    constructor(
        public login:string,
        public bio:string,
        public html_url:string, 
        public avatar_url:string, 
        public id:number,
        public followers:string, 
        public following:string, 
        public public_repos:string,
        public created_at:Date,
        public location:string,
        public email:string
        ){
}
}
