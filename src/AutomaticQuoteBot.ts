import {AdSpace} from "./AdSpace"
import {BlogAuctionTask} from "./BlogAuctionTask"
import {ProposalQuotePublisher} from "./proposal_publisher/ProposalQuotePublisher";
import {DataMarketStudyRetriever} from "./data_retriever/DataMarketStudyRetriever";

export class AutomaticQuoteBot {

    sendAllQuotes(mode: string) {
        const blogs = AdSpace.getAdSpaces()
        for (const blog in blogs) {
            const proposalQuotePublisher = new ProposalQuotePublisher()
            const dataMarketStudyRetriever = new DataMarketStudyRetriever()
            const blocAuctionTask = new BlogAuctionTask(dataMarketStudyRetriever, proposalQuotePublisher)
            blocAuctionTask.priceAndPublish(blog, mode)
        }
    }
}
