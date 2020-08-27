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

    openSession() {
        
    }
}
