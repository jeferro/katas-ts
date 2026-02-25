import {describe, it, expect, vi} from 'vitest'
import {BlogAuctionTask} from './BlogAuctionTask'
import {QuotePublisher} from "../lib/QuotePublisher";
import {MarketStudyVendor} from "../lib/MarketStudyVendor";

describe('BlogAuctionTask', () => {

    const blogs = ["HackerNews", "Reddit", "TechCrunch", "BuzzFeed", "TheHuffPost", "TMZ", "GigaOM"]
    const modes = ["SLOW", "MEDIUM", "FAST", "ULTRAFAST", "OTHER"]

    const combinations = blogs.flatMap(blog => modes.map(mode => [blog, mode]))

    const task = new BlogAuctionTask()

    it.each(combinations)(
        'should generate snaphost to blog: %s and mode: %s',
        (blog, mode) => {
            process.env.LICENSE = 'quotebot-license';

            vi.setSystemTime(new Date('2026-01-15T12:00:00Z'))

            vi.spyOn(MarketStudyVendor.prototype, 'averagePrice').mockReturnValue(12)

            const publishSpy = vi.spyOn(QuotePublisher, 'publish').mockReturnValue()

            task.priceAndPublish(blog, mode)

            const proposal = publishSpy.mock.calls[0][0]

            expect(proposal).toMatchSnapshot()

            vi.useRealTimers()
        }
    )
})