import ConfigurationManager from "./Config/configurationManager";
import containerBuilder from "./DIService";
import DataAccess from "./Infrastructure/DataAccess";
import AdminRepository from "./Infrastructure/Repositories/AdminRepository";
export default async (configFilePath: string) => {
   
    console.log("compiling services...")
    await containerBuilder.compile();
    
    console.log("configuring settings...")
    containerBuilder.get<ConfigurationManager>("ConfigurationManager").AddConfigFile(configFilePath);

    console.log("configuring DB...")
    await containerBuilder.get<DataAccess>("DataAccess").ConnectToDb();

};