import {ProposalPublisher} from "./proposal_publisher/ProposalPublisher";
import {DataRetriever} from "./data_retriever/DataRetriever";

export class BlogAuctionTask {
    constructor(private dataRetriever: DataRetriever,
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
            proposal = 3.15 * timeFactor * Math.round((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 10000000)
        }

        this.proposalPublisher.publish(proposal)
    }
}
