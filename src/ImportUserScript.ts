import {UserCsvLoader} from "./loaders/UserCsvLoader";
import {UserWebLoader} from "./loaders/UserWebLoader";


export class ImportUserScript {

    private userCsvLoader = new UserCsvLoader()
    private userWebLoader = new UserWebLoader()

    async execute(): Promise<void> {
        const usersFromCsv = await this.userCsvLoader.load()

        const usersFromWeb = await this.userWebLoader.load()

        /**
         * Shape: providers array[ id -> number,
         *                   email -> string
         *                   first_name -> string
         *                   last_name -> string ]
         */
        const providers = usersFromCsv.concat(usersFromWeb); // merge arrays

        // Print users
        this.log("*********************************************************************************")
        this.log("* ID\t\t* COUNTRY\t* NAME\t\t* EMAIL\t\t\t\t*")
        this.log("*********************************************************************************")
        for (let j = 0; j < providers.length; j++) {
            this.log(`* ${providers[j][0]}\t* ${providers[j][3]}\t* ${providers[j][2]}\t* ${providers[j][5]}\t*`)
        }
        this.log("*********************************************************************************")
        this.log(providers.length + ' users in total!')
    }

    public log(data: string) {
        console.log(data)
    }
}