import {AutomaticQuoteBot} from "./AutomaticQuoteBot"
import {ProposalQuotePublisher} from "./proposal_publisher/ProposalQuotePublisher";
import {DateTimeService} from "./timeservice/DateTimeService";
import {DataMarketStudyRetriever} from "./data_retriever/DataMarketStudyRetriever";
import {BlogAuctionTask} from "./BlogAuctionTask";
import {BlogsCacheRepository} from "./BlogsCacheRepository";


export class Application {

    static main(_args: string[] = []) {
        const proposalQuotePublisher = new ProposalQuotePublisher()
        const timeService = new DateTimeService()
        const dataMarketStudyRetriever = new DataMarketStudyRetriever()

        const blogsCacheRepository = new BlogsCacheRepository()
        const blogAuctionTask = new BlogAuctionTask(dataMarketStudyRetriever, timeService, proposalQuotePublisher)

        const bot = new AutomaticQuoteBot(blogAuctionTask, blogsCacheRepository)

        bot.sendAllQuotes("FAST")
    }
}
