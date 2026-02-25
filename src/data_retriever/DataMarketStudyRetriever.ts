import {DataRetriever} from "./DataRetriever";

export class DataMarketStudyRetriever implements DataRetriever {
    private marketStudyRetriever = new DataMarketStudyRetriever()

    averagePrice(blog: string): number {
        return this.marketStudyRetriever.averagePrice(blog)
    }
}