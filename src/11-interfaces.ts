export interface  Driver{
    database : string;
    password: string;
    port: number;
}

class PostgresDriver implements Driver{
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}

    connect() : void {}
    disconnect() : void {}
    isConnected( name : string ) : boolean { return this.database === name; } 
}
class OracleDriver implements Driver{
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}
}