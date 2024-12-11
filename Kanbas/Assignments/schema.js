import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    description: String,
    points: String,
    dueDate: String,
    availableFromDate: String,
    availableUntilDate: String,
  },
  { collection: "assignments" }
);
export default schema;