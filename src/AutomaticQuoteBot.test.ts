import {describe, it, expect} from 'vitest'
import {AutomaticQuoteBot} from "./AutomaticQuoteBot";
import {BlogAuctionTask} from "./BlogAuctionTask";
import {DataMarketStudyRetriever} from "./data_retriever/DataMarketStudyRetriever";
import {ProposalQuotePublisher} from "./proposal_publisher/ProposalQuotePublisher";

describe('AutomaticQuoteBot', () => {

    const automaticQuoteBot = new AutomaticQuoteBot()

    it('should auction all blogs in mode SLOW', () => {
        vi.spyOn(DataMarketStudyRetriever.prototype, 'averagePrice').mockReturnValue(12)
        vi.spyOn(ProposalQuotePublisher.prototype, 'publish').mockReturnValue()

        const priceAndPublishSpy = vi.spyOn(BlogAuctionTask.prototype, 'priceAndPublish')

        automaticQuoteBot.sendAllQuotes("SLOW")

        expect(priceAndPublishSpy).toHaveBeenCalledTimes(7)

        priceAndPublishSpy.mockRestore();
    })

    it('should auction all blogs in mode MEDIUM', () => {
        vi.spyOn(DataMarketStudyRetriever.prototype, 'averagePrice').mockReturnValue(12)
        vi.spyOn(ProposalQuotePublisher.prototype, 'publish').mockReturnValue()

        const priceAndPublishSpy = vi.spyOn(BlogAuctionTask.prototype, 'priceAndPublish')

        automaticQuoteBot.sendAllQuotes("MEDIUM")

        expect(priceAndPublishSpy).toHaveBeenCalledTimes(7)

        priceAndPublishSpy.mockRestore();
    })

    it('should auction all blogs in mode FAST', () => {
        vi.spyOn(DataMarketStudyRetriever.prototype, 'averagePrice').mockReturnValue(12)
        vi.spyOn(ProposalQuotePublisher.prototype, 'publish').mockReturnValue()

        const priceAndPublishSpy = vi.spyOn(BlogAuctionTask.prototype, 'priceAndPublish')

        automaticQuoteBot.sendAllQuotes("FAST")

        expect(priceAndPublishSpy).toHaveBeenCalledTimes(7)

        priceAndPublishSpy.mockRestore();
    })

    it('should auction all blogs in mode ULTRAFAST', () => {
        vi.spyOn(DataMarketStudyRetriever.prototype, 'averagePrice').mockReturnValue(12)
        vi.spyOn(ProposalQuotePublisher.prototype, 'publish').mockReturnValue()

        const priceAndPublishSpy = vi.spyOn(BlogAuctionTask.prototype, 'priceAndPublish')

        automaticQuoteBot.sendAllQuotes("ULTRAFAST")

        expect(priceAndPublishSpy).toHaveBeenCalledTimes(7)

        priceAndPublishSpy.mockRestore();
    })

    it('should auction all blogs in other mode', () => {
        vi.spyOn(DataMarketStudyRetriever.prototype, 'averagePrice').mockReturnValue(12)
        vi.spyOn(ProposalQuotePublisher.prototype, 'publish').mockReturnValue()

        const priceAndPublishSpy = vi.spyOn(BlogAuctionTask.prototype, 'priceAndPublish')

        automaticQuoteBot.sendAllQuotes("other")

        expect(priceAndPublishSpy).toHaveBeenCalledTimes(7)

        priceAndPublishSpy.mockRestore();
    })
})