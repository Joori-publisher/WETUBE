import mongooese from "mongoose";

mongooese.connect("mongodb://localhost:27017/we-tube",
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