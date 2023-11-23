import { Role } from "./role";

export interface User {
    id : string;
    country : string;
    company : string;
    address : string;
    town : string;
    email : string;
    mobilePhoneNumber: string;
    role: Role;
}

export type Users = User[]