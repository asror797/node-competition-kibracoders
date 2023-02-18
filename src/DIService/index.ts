import { ContainerBuilder, Reference } from "node-dependency-injection";
import ConfigurationManager from "../Config/configurationManager";
import { adminSchema } from "../Domain/Schemas";
import DataAccess from "../Infrastructure/DataAccess";
import AdminRepository from "../Infrastructure/Repositories/AdminRepository";
const containerBuilder = new ContainerBuilder();

//Adding configurations
const configManager = containerBuilder
    .register("ConfigurationManager", ConfigurationManager);
configManager.shared = true;

//Adding Data Access
containerBuilder
    .register("DataAccess", DataAccess)
    .addArgument(new Reference("ConfigurationManager", true));

containerBuilder.register("Repository.Admin", AdminRepository, ["Admin", adminSchema]);


export default containerBuilder;