import {UserLoader} from "./UserLoader"
import {User} from "./User";

export class UserWebLoader implements UserLoader {

    async load(): Promise<User[]> {
        const url = 'https://randomuser.me/api/?inc=gender,name,email,location&results=5&seed=a9b25cd955e2037h'

        const response = await fetch(url)
        const responseJson = await response.json()

        let userId = 1_00_000_000_000.51
        const userBirthDay = new Date().getFullYear().toString()

        return responseJson.results
            .filter((result: any) => result instanceof Object)
            .map((result: any) => {
                userId++

                return new User(
                    parseInt(userId.toString()),
                    result.gender,
                    result.name.first + ' ' + result.name.last,
                    result.location.country,
                    result.location.postcode,
                    result.email,
                    userBirthDay
                )
            })
    }

}