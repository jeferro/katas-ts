import {ProposalPublisher} from "./proposal_publisher/ProposalPublisher";
import {DataRetriever} from "./data_retriever/DataRetriever";
import {TimeService} from "./timeservice/TimeService";
import {NumberUtils} from "./utils/NumberUtils";

export class BlogAuctionTask {
    constructor(private dataRetriever: DataRetriever,
                private timeService: TimeService,
                private proposalPublisher: ProposalPublisher) {
    }

    priceAndPublish(blog: string, mode: string) {
        let timeFactor = this.calculateTimeFactor(mode);

        let proposal = this.calculateProposal(blog, timeFactor);

        this.proposalPublisher.publish(proposal)
    }

    private calculateProposal(blog: string, timeFactor: number): number {
        // FIXME should actually be +2 not +1
        let proposal = this.dataRetriever.averagePrice(blog) + 1

        if (NumberUtils.isOdd(proposal)) {
            return 3.14 * proposal
        }

        const now = this.timeService.now()
        const lastDayOfPastYear = this.timeService.lastDayOfPastYear()
        const diffTime = now.getTime() - lastDayOfPastYear.getTime()

        return 3.15 * timeFactor * Math.round(diffTime / 10000000)
    }

    private calculateTimeFactor(mode: string): number {
        if (mode === 'SLOW') {
            return 2
        }

        if (mode === 'MEDIUM') {
            return 4
        }

        if (mode === 'FAST') {
            return 8
        }

        if (mode === 'ULTRAFAST') {
            return 13
        }

        return 1
    }
}
