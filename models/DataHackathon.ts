import mongoose, { Document, Schema } from 'mongoose';

export interface IDataHackathon extends Document {
    name: string;
    email: string;
    f1Score: number;
}

const DataHackathonSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    f1Score: { type: Number, required: true },
});

export default mongoose.models.DataHackathon ||
    mongoose.model<IDataHackathon>('DataHackathon', DataHackathonSchema);
