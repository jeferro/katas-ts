import fs from "fs"
import {UserLoader} from "./UserLoader"
import {User} from "./User";

export class UserCsvLoader implements UserLoader {

    async load(): Promise<User[]> {
        const csvLines = fs.readFileSync(__dirname + '/../users.csv', 'utf8')
            .split("\n")

        return csvLines.slice(1)
            .map(line => {
                const userData = line.split(",")

                return new User(
                    parseInt(userData[0]),
                    userData[1],
                    userData[2],
                    userData[3],
                    userData[4],
                    userData[5],
                    userData[0]
                )
            })
    }

}