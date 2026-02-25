import {BlogsCacheRepository} from "./BlogsCacheRepository"
import {BlogAuctionTask} from "./BlogAuctionTask"

export class AutomaticQuoteBot {

    constructor(private blogAuctionTask: BlogAuctionTask,
                private blogsCacheRepository: BlogsCacheRepository) {
    }

    sendAllQuotes(mode: string) {
        const blogs = this.blogsCacheRepository.findAll()

        for (const blog in blogs) {
            this.blogAuctionTask.priceAndPublish(blog, mode)
        }
    }
}
