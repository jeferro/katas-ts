import {UserCsvLoader} from "./loaders/UserCsvLoader"
import {UserWebLoader} from "./loaders/UserWebLoader"
import {UserLoader} from "./loaders/UserLoader"
import {User} from "./loaders/User"
import {Logger} from "./logger/Logger"


export class ImportUserScript {

    private readonly userLoaders: UserLoader[] = [
        new UserCsvLoader(),
        new UserWebLoader()
    ]

    constructor(private readonly logger: Logger) {
    }

    async execute(): Promise<void> {
        let providers = await this.loadUsers()

        this.logger.log("*********************************************************************************")
        this.logger.log("* ID\t\t* COUNTRY\t* NAME\t\t* EMAIL\t\t\t\t*")
        this.logger.log("*********************************************************************************")

        providers.forEach(provider => {
            this.logger.log(`* ${provider.id}\t* ${provider.country}\t* ${provider.fullName}\t* ${provider.email}\t*`)
        })

        this.logger.log("*********************************************************************************")
        this.logger.log(providers.length + ' users in total!')
    }

    private async loadUsers(): Promise<User[]> {
        let providers: User[] = []

        for (const userLoader of this.userLoaders) {
            const users = await userLoader.load()

            providers = providers.concat(users)
        }

        return providers;
    }
}