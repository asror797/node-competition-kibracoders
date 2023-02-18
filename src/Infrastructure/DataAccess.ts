import { connect } from "mongoose";
import ConfigurationManager from "../Config/configurationManager";

export default class DataAccess {
    /**
     *
     */
    private readonly configManager: ConfigurationManager;
    constructor(configManager: ConfigurationManager) {
        this.configManager = configManager;
    }

    public async ConnectToDb() {
        console.log(this.configManager.GetValue("ConnectionString"));
        try {
            (await connect(this.configManager.GetValue("ConnectionString")))
        } catch (error) {
            console.error("Error on mongoose connection. \nError: " + error)
            process.exit(1);
        }
    }
}

