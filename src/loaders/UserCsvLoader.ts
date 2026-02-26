import fs from "fs"
import {UserLoader} from "./UserLoader"

export class UserCsvLoader implements UserLoader {

    async load(): Promise<any[]> {
        const csvLines = fs.readFileSync(__dirname + '/../users.csv', 'utf8')
            .split("\n")

        // fields: ID, gender, Name ,country, postcode, email, Birthdate
        return csvLines.slice(1)
            .map(line => line.split(","))
    }

}