export class SessionFactory {
    constructor(config) {
        this.dbname = config.dbName;
        this.dbVersion = config.dbVersion;
        this.stores = new Map();
        config.mappers.forEach(mapper => {
            this.stores.set(
                mapper.clazz.name, 
                mapper.converter
            )
        });
    }

    async openSession() {
        const connection = await createConnection(
            this.dbName, 
            this.dbVersion, 
            this.stores
        )

        return new Session(connection, this.stores);
    }
}

class Session {
    constructor(connection, stores) {
        this.connection = connection;
        this.stores = stores;
    }
}

function createConnection(dbName, dbVersion, stores) {
    return new Promise((resolve, reject) => {
        resolve('conexão');
    });
}

