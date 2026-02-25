import {describe, it, expect} from 'vitest'
import { mock } from 'vitest-mock-extended'
import {BlogAuctionTask} from './BlogAuctionTask'
import {ProposalPublisher} from "./proposal_publisher/ProposalPublisher"
import {DataRetriever} from "./data_retriever/DataRetriever"
import {DateTimeService} from "./timeservice/DateTimeService"

describe('BlogAuctionTask', () => {

    const blogs = ["HackerNews", "Reddit", "TechCrunch", "BuzzFeed", "TheHuffPost", "TMZ", "GigaOM"]
    const modes = ["SLOW", "MEDIUM", "FAST", "ULTRAFAST", "OTHER"]

    const combinations = blogs.flatMap(blog => modes.map(mode => [blog, mode]))

    const dataRetriever = mock<DataRetriever>()
    const timeService = new DateTimeService()
    const proposalPublisher = mock<ProposalPublisher>()

    const blogAuctionTask = new BlogAuctionTask(dataRetriever, timeService, proposalPublisher)

    it.each(combinations)(
        'should generate snapshot to blog: %s and mode: %s',
        (blog, mode) => {

            vi.spyOn(timeService, 'now').mockReturnValue(new Date('2026-01-15T12:00:00Z'))

            dataRetriever.averagePrice.mockReturnValue(12);

            blogAuctionTask.priceAndPublish(blog, mode)

            const proposal = proposalPublisher.publish.mock.calls[0][0]

            expect(proposal).toMatchSnapshot()
        }
    )
})