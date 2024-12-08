import mongoose, { Document, Schema } from 'mongoose';

export interface IPromptCraft extends Document {
    name: string;
    email: string;
    prompt: string;
    imageUrl: string;
}

const PromptCraftSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    prompt: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

export default mongoose.models.PromptCraft ||
    mongoose.model<IPromptCraft>('PromptCraft', PromptCraftSchema);
