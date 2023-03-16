export class User
{
    readonly email: string;
    readonly name: string;
    readonly picture: string;

    constructor(email: string, name: string, picture: string) {
        this.email = email;
        this.name = name;
        this.picture = picture;
    }
}