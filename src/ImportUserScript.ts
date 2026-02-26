import fs from "fs";

export class ImportUserScript {

    async execute(): Promise<void> {
        const usersFromCsv = this.loadUsersFromCsv();

        const usersFromWeb = await this.loadUsersFromWeb();

        /**
         * Shape: providers array[ id -> number,
         *                   email -> string
         *                   first_name -> string
         *                   last_name -> string ]
         */
        var providers = usersFromCsv.concat(usersFromWeb) // merge arrays

        // Print users
        this.log("*********************************************************************************");
        this.log("* ID\t\t* COUNTRY\t* NAME\t\t* EMAIL\t\t\t\t*")
        this.log("*********************************************************************************")
        for (let j = 0; j < providers.length; j++) {
            this.log(`* ${providers[j][0]}\t* ${providers[j][3]}\t* ${providers[j][2]}\t* ${providers[j][5]}\t*`)
        }
        this.log("*********************************************************************************")
        this.log(providers.length + ' users in total!')
    }

    private async loadUsersFromWeb() {
        const url = 'https://randomuser.me/api/?inc=gender,name,email,location&results=5&seed=a9b25cd955e2037h'

        const response = await fetch(url);
        const responseJson = await response.json();

        let userId = 1_00_000_000_000.51;
        const userBirthDay = new Date().getFullYear()

        return responseJson.results
            .filter((result: any) => result instanceof Object)
            .map((result: any) => {
                userId++

                return [
                    parseInt(userId.toString()),
                    result.gender,
                    result.name.first + ' ' + result.name.last,
                    result.location.country,
                    result.location.postcode,
                    result.email,
                    userBirthDay
                ]
            })
    }

    private loadUsersFromCsv() {
        const csvLines = fs.readFileSync(__dirname + '/users.csv', 'utf8')
            .split("\n");

        // fields: ID, gender, Name ,country, postcode, email, Birthdate
        return csvLines.slice(1)
            .map(line => line.split(","))
    }

    public log(data: string) {
        console.log(data)
    }
}