import { Document, Schema, model, ObjectId, FilterQuery, UpdateQuery } from "mongoose";

export default class RepositoryBase<T> {
    private readonly schema: Schema<T>;
    public readonly model;
    constructor(DocName: string, schema: Schema<T>,) {
        this.schema = schema;
        this.model = model<T>(DocName, schema);
    }

    public async GetAllAsync() {
        return await this.model.find();
    }
    public async GetByIdAsync(_id: ObjectId) {
        return await this.model.findById(_id);
    }
    public async GetByFilterAsync(filter: FilterQuery<T>) {
        return await this.model.find(filter);
    }
    public async CreateAsync(data: T) {
        return await this.model.create(data);
    }
    public async UpdateByFilterAsyncAsync(filter: FilterQuery<T>, data: UpdateQuery<T>) {
        return await this.model.updateOne(filter, {
            $set: data
        }, { returnDocument: "after" });
    }
    public async DeleteByFilterAsync(filter: FilterQuery<T>) {
        return await this.model.deleteOne(filter, { returnDocument: "after" });
    }
}