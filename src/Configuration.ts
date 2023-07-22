export default class Configuration {
    protected readonly : boolean = false;
    protected configuration : Map<string, any> = new Map<string, any>();
    constructor(readonly : boolean) {
        this.readonly = readonly;
        let config = null;
        this.pushConfig(config); // use xml at some point
    }
    public static has(keys : string[], config : Configuration) : boolean {
        return config.getKeys().filter(
            (value : string): boolean => { return keys.indexOf(value) != -1; }
        ).length == keys.length;
    }
    public getKeys(): string[] {
        let keyArray : string[] = [];
        if (this.configuration.size == 0) return keyArray;

        this.configuration.forEach( (value, key) => {
            keyArray.push(key.toString());
        })
        return keyArray;
    }
    public setValue(key : string, value : any) : boolean {
        if (this.readonly) {
            return false;
        }
        this.configuration.set(key, value);
        return true;
    }
    public getValue(key : string) : any {
        if (this.configuration.has(key)) {
            return this.configuration.get(key);
        }
        return null;
    }
    private pushConfig(config : any)  {
        let p;
        for (p in config) {
            if (config.hasOwnProperty(p)) {
                console.log(`Property ${p.toString()} with value ${config[p].toString()} is added.`)
                this.configuration.set(p.toString(), config[p]) // p could be an identifier, a string, or a number.
            }
        }
    }
}


