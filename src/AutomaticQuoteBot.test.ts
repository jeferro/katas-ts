import {describe, it, expect} from 'vitest'
import {AutomaticQuoteBot} from "./AutomaticQuoteBot"
import {BlogAuctionTask} from "./BlogAuctionTask"
import {mock} from "vitest-mock-extended"
import {BlogsCacheRepository} from "./BlogsCacheRepository";

describe('AutomaticQuoteBot', () => {

    const blogAuctionTask = mock<BlogAuctionTask>()
    const blogsCacheRepository = new BlogsCacheRepository()

    const automaticQuoteBot = new AutomaticQuoteBot(blogAuctionTask, blogsCacheRepository)

    it.beforeEach(() => {
        blogAuctionTask.priceAndPublish.mockClear()
    })

    it('should auction all blogs in mode SLOW', () => {
        automaticQuoteBot.sendAllQuotes("SLOW")

        expect(blogAuctionTask.priceAndPublish).toHaveBeenCalledTimes(7)
    })

    it('should auction all blogs in mode MEDIUM', () => {
        automaticQuoteBot.sendAllQuotes("MEDIUM")

        expect(blogAuctionTask.priceAndPublish).toHaveBeenCalledTimes(7)
    })

    it('should auction all blogs in mode FAST', () => {
        automaticQuoteBot.sendAllQuotes("FAST")

        expect(blogAuctionTask.priceAndPublish).toHaveBeenCalledTimes(7)
    })

    it('should auction all blogs in mode ULTRAFAST', () => {
        automaticQuoteBot.sendAllQuotes("ULTRAFAST")

        expect(blogAuctionTask.priceAndPublish).toHaveBeenCalledTimes(7)
    })

    it('should auction all blogs in other mode', () => {
        automaticQuoteBot.sendAllQuotes("other")

        expect(blogAuctionTask.priceAndPublish).toHaveBeenCalledTimes(7)
    })
})