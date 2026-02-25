import {TechBlogs} from "./TechBlogs"

export class BlogsCacheRepository {
    private static cache: string[] = []

    static findAll(): string[] {
        if (this.cache.length > 0) {
            return this.cache
        }

        // FIXME : only return blogs that start with a 'T'

        this.cache = TechBlogs.listAllBlogs()
        return this.cache
    }
}
