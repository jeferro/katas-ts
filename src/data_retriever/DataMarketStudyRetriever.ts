import {DataRetriever} from "./DataRetriever";
import {MarketStudyVendor} from "../../lib/MarketStudyVendor";

export class DataMarketStudyRetriever implements DataRetriever {
    private marketStudyRetriever = new MarketStudyVendor()

    averagePrice(blog: string): number {
        return this.marketStudyRetriever.averagePrice(blog)
    }
}