import mongoose, { Document, Schema } from 'mongoose';

export interface IPromptCraft extends Document {
    name: string;
    email: string;
    prompt: string;
    imageUrl: string;
    votes: number;
}

const PromptCraftSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    prompt: { type: String, required: true },
    imageUrl: { type: String, required: true },
    votes: { type: Number, default: 0 },
});

export default mongoose.models.PromptCraft ||
    mongoose.model<IPromptCraft>('PromptCraft', PromptCraftSchema);
