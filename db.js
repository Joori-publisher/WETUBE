import mongooese from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongooese.connect(process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useFindAndModify:false
    }
);

const db = mongooese.connection;

const hangleOpen = () =>console.log("✅ connected to DB");
const hangleError = (error) =>console.log(`❌ Error on DB Connection : ${error}`);

db.once("open",hangleOpen);
db.on("error",hangleError);