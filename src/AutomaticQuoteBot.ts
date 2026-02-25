import {BlogAuctionTask} from "./BlogAuctionTask"
import {BlogRepository} from "./repository/BlogRepository";

export class AutomaticQuoteBot {

    constructor(private blogAuctionTask: BlogAuctionTask,
                private blogRepository: BlogRepository) {
    }

    sendAllQuotes(mode: string) {
        const blogs = this.blogRepository.findAll()

        for (const blog in blogs) {
            this.blogAuctionTask.priceAndPublish(blog, mode)
        }
    }
}
