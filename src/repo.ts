
export class Repository {
    static instance = new Repository();
    entry: Map<any, any> = new Map();

    register(key:any, value:any) {
        this.entry.set(key, value);
    }

    get(key: any) {
        return this.entry.get(key);
    }

}
