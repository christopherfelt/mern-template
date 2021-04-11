import mongoose from "mongoose";
let Schema = mongoose.Schema;

const App1Schema = new Schema(
  {
    description: { type: String, required: true },
    title: { type: String, required: true },
    // creatorEmail: { type: String, required: true },
  },
  { timestamps: true }
);

//#region UTILS

// App1.virtual("creator", {
//   localField: "creatorEmail",
//   ref: "Profile",
//   foreignField: "email",
//   justOne: true,
// });

// TODO Need to move the deletes to some other file
//CASCADE ON DELETE
// App1.pre("deleteMany", function (next) {
//   //lets find all the App1s and remove them
//   Promise.all([
//     //something like...
//     //dbContext.Task.deleteMany({ App1Id: this._conditions_id }),
//   ])
//     .then(() => next())
//     .catch((err) => next(err));
// });

//CASCADE ON DELETE
// App1.pre("findOneAndRemove", function (next) {
//   //lets find all the App1s and remove them
//   Promise.all([
//     // dbContext.Task.deleteMany({ boardId: this._conditions._id })
//   ])
//     .then(() => next())
//     .catch((err) => next(err));
// });

//#endregion UTILS

const App1 = mongoose.model("app1", App1Schema);

export default App1;
