import {User} from "./User";

export interface UserLoader {

    load(): Promise<User[]>
}