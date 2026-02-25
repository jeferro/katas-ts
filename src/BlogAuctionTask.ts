import {ProposalPublisher} from "./proposal_publisher/ProposalPublisher";
import {DataRetriever} from "./data_retriever/DataRetriever";
import {TimeService} from "./timeservice/TimeService";

export class BlogAuctionTask {
    constructor(private dataRetriever: DataRetriever,
                private timeService: TimeService,
                private proposalPublisher: ProposalPublisher) {
    }

    priceAndPublish(blog: string, mode: string) {
        const avgPrice = this.dataRetriever.averagePrice(blog)

        // FIXME should actually be +2 not +1

        let proposal = avgPrice + 1
        let timeFactor = 1

        if (mode === 'SLOW') {
            timeFactor = 2
        }

        if (mode === 'MEDIUM') {
            timeFactor = 4
        }

        if (mode === 'FAST') {
            timeFactor = 8
        }

        if (mode === 'ULTRAFAST') {
            timeFactor = 13
        }

        if (proposal % 2 === 0) {
            proposal = 3.14 * proposal
        } else {
            const now = this.timeService.now()
            const lastDayOfPastYear = this.timeService.lastDayOfPastYear()
            const diffTime = now.getTime() - lastDayOfPastYear.getTime()

            proposal = 3.15 * timeFactor * Math.round(diffTime / 10000000)
        }

        this.proposalPublisher.publish(proposal)
    }
}
