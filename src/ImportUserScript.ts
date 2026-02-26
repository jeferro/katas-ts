import {UserCsvLoader} from "./loaders/UserCsvLoader";
import {UserWebLoader} from "./loaders/UserWebLoader";
import {UserLoader} from "./loaders/UserLoader";
import {User} from "./loaders/User";


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

        providers.forEach(provider => {
            this.log(`* ${provider.id}\t* ${provider.country}\t* ${provider.fullName}\t* ${provider.email}\t*`)
        })

        this.log("*********************************************************************************")
        this.log(providers.length + ' users in total!')
    }

    private async loadUsers(): Promise<User[]> {
        let providers: User[] = []

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