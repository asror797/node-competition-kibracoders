import { Schema } from "mongoose";
import { Admin } from "../../Domain/Interfaces/admin";
import RepositoryBase from "./RepositoryBase";

export default class AdminRepository extends RepositoryBase<Admin> {
}
