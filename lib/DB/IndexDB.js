import mongoose from "mongoose";
const URL =
  "mongodb+srv://abhisheksathala296:Abhishek9949@cluster0.sglintv.mongodb.net/";

const IndexDB = async () => {
  try {
    const ConnectDBInstance = await mongoose.connect(`${URL}`);

    if (connectExtantion) {
      console.log(
        "\n- CONNECTED TO MONGODB FROM INDEXdb OF CONFIG",
        ConnectDBInstance.connection.host
      );
    }
  } catch (error) {
    console.log("YOU GOT ERROR  IN THE INDEXDB.JS:", error);
  }
};

export default IndexDB
