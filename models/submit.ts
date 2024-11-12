import { model, Schema } from "mongoose";

const SubmitSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required."],
  },
  email: {
    type: String,
    require: [true, "Password is required!"],
    unique: true,
    lowercase: true,
  },
  prompt: {
    type: String,
    require: [true, "Add your prompt please!"],
  },
  image: {
    type: String,
    require: true,
  },
});

const Submission = model("Submission", SubmitSchema);

export default Submission;
