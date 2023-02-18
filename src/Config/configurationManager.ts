import fs from "fs";

export default class ConfigurationManager {
    /**
     *
     */
    private config: object;
    /**
     *
     */
    constructor() {
        this.config = {};
    }
    public AddConfigFile(configFilePath: string) {
        this.config = Object.assign(this.config, this.ObjectParserFromStorage(configFilePath));
    }

    private ObjectParserFromStorage(filePath: string): object {
        if (!fs.existsSync(filePath))
            throw new Error("Config file not found. Path: " + filePath);
        try {
            return JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));
        } catch (error) {
            throw error;
        }
    }
    public GetValue(key: string): string {
        return Object.entries(this.config).find(x => x[0] == key)?.[1] as string;
    }
}
