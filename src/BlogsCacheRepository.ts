import {TechBlogs} from "./TechBlogs"

export class BlogsCacheRepository {

    private cache: string[] = []

    findAll(): string[] {
        // FIXME : only return blogs that start with a 'T'

        if (this.cache.length == 0) {
            this.cache = TechBlogs.listAllBlogs()
        }

        return this.cache
    }
}
