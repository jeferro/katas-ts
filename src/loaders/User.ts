export class User {
    constructor(public readonly id: number,
                public readonly gender: string,
                public readonly fullName: string,
                public readonly country: string,
                public readonly postcode: string,
                public readonly email: string,
                public readonly birthDay: string) {
    }
}