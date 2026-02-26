import {UserCsvLoader} from "./loaders/UserCsvLoader";
import {UserWebLoader} from "./loaders/UserWebLoader";
import {UserLoader} from "./loaders/UserLoader";


export class ImportUserScript {

    private readonly userLoaders: UserLoader[] = [
        new UserCsvLoader(),
        new UserWebLoader()
    ]

    async execute(): Promise<void> {
        let providers = await this.loadUsers();

        this.log("*********************************************************************************")
        this.log("* ID\t\t* COUNTRY\t* NAME\t\t* EMAIL\t\t\t\t*")
        this.log("*********************************************************************************")
        for (let j = 0; j < providers.length; j++) {
            this.log(`* ${providers[j][0]}\t* ${providers[j][3]}\t* ${providers[j][2]}\t* ${providers[j][5]}\t*`)
        }
        this.log("*********************************************************************************")
        this.log(providers.length + ' users in total!')
    }

    private async loadUsers() {
        let providers: any[] = []

        for (const userLoader of this.userLoaders) {
            const users = await userLoader.load()

            providers = providers.concat(users)
        }

        return providers;
    }

    public log(data: string) {
        console.log(data)
    }
}