import {ProposalPublisher} from "./ProposalPublisher";
import {QuotePublisher} from "../../lib/QuotePublisher";

export class ProposalQuotePublisher implements ProposalPublisher {

    publish(proposal: number): void {
        QuotePublisher.publish(proposal)
    }

}