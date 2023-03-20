export class OptionDrawer {
    readonly key: string
    readonly icon: string
    readonly to: string

    constructor(name: string, icon: string, to: string) {
        this.key = name;
        this.icon = icon;
        this.to = to;
    }

    toJSON () {
        return { ...this } // here I make a POJO's copy of the class instance
    }
}
