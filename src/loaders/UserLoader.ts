export interface UserLoader {

    load(): Promise<any[]>
}