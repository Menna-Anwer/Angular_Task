export interface IUser {
    fullName:string,
    email:string,
    phoneNumbers:string,
    address:{
        city:string,
        postalCode:string,
        street:string
    };
    password:string ;
}
