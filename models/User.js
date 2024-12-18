// import mongoose from "mongoose";
// const {Schema, model } = mongoose;

// const UserSchema = new Schema({
//     email: { type: String, required: true },
//     name: {type: String},
//     username: { type: String, required: true},
//     profilepic: { type: String },                       // link
//     coverpic: { type: String},                          // link
//     razorpayid: {type: String },
//     razorpaysecret: {type: String},
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.User ||  model("User", UserSchema);

// chat-gpt
// import mongoose from "mongoose";

// const { Schema, model, models } = mongoose;

// const UserSchema = new Schema({
//   email: { type: String, required: true },
//   name: { type: String },
//   username: { type: String, required: true },
//   profilepic: { type: String },
//   coverpic: { type: String },
//   razorpayid: { type: String },
//   razorpaysecret: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// export default models.User || model("User", UserSchema);

// const mongoose = require('mongoose');
import mongoose from "mongoose";
const {Schema, model, models} = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// const User = mongoose.model("User", UserSchema);
// export default mongoose.models.User || User;

// const User = mongoose.models.User || mongoose.model('User', UserSchema);
// module.exports = User;

export default mongoose.models.User || model("User", UserSchema);




