import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
class Singleton {
    static _instance;
    constructor() {
        this.client = new MongoClient(process.env.MONGODB_URI);
        this.clientPromise = this.client.connect();
    }

    static get instance() {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance.clientPromise;
    }
}
const clientPromise = Singleton.instance;

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
