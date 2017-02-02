export declare class Repository {
    static instance: Repository;
    entry: Map<any, any>;
    register(key: any, value: any): void;
    get(key: any): any;
}
