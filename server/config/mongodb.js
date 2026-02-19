import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("✅ Success: Database Connected");
    });

    mongoose.connection.on('error', (err) => {
        console.error("MongoDB Connection Error:", err.message);
    });

    try {
        const url = process.env.MONGODB_URL;    
        if (!url) {
            throw new Error("MONGODB_URL is missing in environment variables.");
        }
        await mongoose.connect(url);

    } catch (err) {
        console.error('Initial Connection Failed:', err.message);
        process.exit(1); 
    }
};

export default connectDB;