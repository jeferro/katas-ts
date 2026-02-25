import {describe, it, expect, vi} from 'vitest'
import { mock } from 'vitest-mock-extended'
import {BlogAuctionTask} from './BlogAuctionTask'
import {MarketStudyVendor} from "../lib/MarketStudyVendor"
import {ProposalPublisher} from "./proposal_publisher/ProposalPublisher"

describe('BlogAuctionTask', () => {

    const blogs = ["HackerNews", "Reddit", "TechCrunch", "BuzzFeed", "TheHuffPost", "TMZ", "GigaOM"]
    const modes = ["SLOW", "MEDIUM", "FAST", "ULTRAFAST", "OTHER"]

    const combinations = blogs.flatMap(blog => modes.map(mode => [blog, mode]))

    const proposalPublisher = mock<ProposalPublisher>();

    const blogAuctionTask = new BlogAuctionTask(proposalPublisher)

    it.each(combinations)(
        'should generate snaphost to blog: %s and mode: %s',
        (blog, mode) => {
            process.env.LICENSE = 'quotebot-license';

            vi.setSystemTime(new Date('2026-01-15T12:00:00Z'))

            vi.spyOn(MarketStudyVendor.prototype, 'averagePrice').mockReturnValue(12)

            blogAuctionTask.priceAndPublish(blog, mode)

            const proposal = proposalPublisher.publish.mock.calls[0][0]

            expect(proposal).toMatchSnapshot()

            vi.useRealTimers()
        }
    )
})