import {AdSpace} from "./AdSpace"
import {BlogAuctionTask} from "./BlogAuctionTask"
import {ProposalQuotePublisher} from "./proposal_publisher/ProposalQuotePublisher";

export class AutomaticQuoteBot {

    sendAllQuotes(mode: string) {
        const blogs = AdSpace.getAdSpaces()
        for (const blog in blogs) {
            const proposalQuotePublisher = new ProposalQuotePublisher()
            const blocAuctionTask = new BlogAuctionTask(proposalQuotePublisher)
            blocAuctionTask.priceAndPublish(blog, mode)
        }
    }
}
