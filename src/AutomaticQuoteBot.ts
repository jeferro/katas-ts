import {BlogsCacheRepository} from "./BlogsCacheRepository"
import {BlogAuctionTask} from "./BlogAuctionTask"
import {ProposalQuotePublisher} from "./proposal_publisher/ProposalQuotePublisher";
import {DataMarketStudyRetriever} from "./data_retriever/DataMarketStudyRetriever";
import {DateTimeService} from "./timeservice/DateTimeService";
import {ProposalPublisher} from "./proposal_publisher/ProposalPublisher";
import {TimeService} from "./timeservice/TimeService";
import {DataRetriever} from "./data_retriever/DataRetriever";

export class AutomaticQuoteBot {

    constructor(private blogAuctionTask: BlogAuctionTask) {
    }

    sendAllQuotes(mode: string) {
        const blogs = BlogsCacheRepository.findAll()

        for (const blog in blogs) {
            this.blogAuctionTask.priceAndPublish(blog, mode)
        }
    }
}
