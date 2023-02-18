import { connect } from "mongoose";
import { } from "node-dependency-injection";
import ConfigurationManager from "../Config/configurationManager";

class DataAccess {
    /**
     *
     */
    private readonly configManager: ConfigurationManager;
    constructor(configManager: ConfigurationManager) {
        this.configManager = configManager;
    }

    private async ConnectToDb() {
        try {
            (await connect(this.configManager.GetValue("ConnectionString")))
        } catch (error) {
            console.error("Error on mongoose connection. \nError: " + error)
            process.exit(1);
        }
    }
}