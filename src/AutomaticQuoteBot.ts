import {AdSpace} from "./AdSpace"
import {BlogAuctionTask} from "./BlogAuctionTask"
import {ProposalQuotePublisher} from "./proposal_publisher/ProposalQuotePublisher";
import {DataMarketStudyRetriever} from "./data_retriever/DataMarketStudyRetriever";
import {DateTimeService} from "./timeservice/DateTimeService";

export class AutomaticQuoteBot {

    sendAllQuotes(mode: string) {
        const blogs = AdSpace.getAdSpaces()
        for (const blog in blogs) {
            const proposalQuotePublisher = new ProposalQuotePublisher()
            const timeService = new DateTimeService()
            const dataMarketStudyRetriever = new DataMarketStudyRetriever()
            const blocAuctionTask = new BlogAuctionTask(dataMarketStudyRetriever, timeService, proposalQuotePublisher)
            blocAuctionTask.priceAndPublish(blog, mode)
        }
    }
}
