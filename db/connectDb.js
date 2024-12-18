// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
//             useNewUrlParser: true,
//         });
//         console.log(`MongoDB Connected: {conn.connection.host}`);
//     } catch (error) {
//         console.error(error.message);
//         process.exit(1);
//     }
// }

// export default connectDB;

// chatgpt
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/chai`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect('mongodb://localhost:27017/chai', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         // If you want to exit in a CLI script or background service:
//         // process.exit(1);

//         // Otherwise, you could throw the error to handle it elsewhere
//         throw new Error(`MongoDB connection failed: ${error.message}`);
//     }
// };

// export default connectDB;
