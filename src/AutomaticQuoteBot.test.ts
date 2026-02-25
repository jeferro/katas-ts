import {describe, it, expect} from 'vitest'
import {AutomaticQuoteBot} from "./AutomaticQuoteBot"
import {BlogAuctionTask} from "./BlogAuctionTask"
import {mock} from "vitest-mock-extended"
import {BlogRepository} from "./repository/BlogRepository"

describe('AutomaticQuoteBot', () => {

    const blogAuctionTask = mock<BlogAuctionTask>()
    const blogsRepository = mock<BlogRepository>()

    const automaticQuoteBot = new AutomaticQuoteBot(blogAuctionTask, blogsRepository)

    it.beforeEach(() => {
        blogAuctionTask.priceAndPublish.mockClear()
        blogsRepository.findAll.mockReturnValue(["HackerNews",
            "Reddit",
            "TechCrunch",
            "BuzzFeed",
            "TheHuffPost",
            "TMZ",
            "GigaOM"])
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