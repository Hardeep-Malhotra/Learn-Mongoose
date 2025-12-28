import mongoose from "mongoose";

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/transactionDemo");
    console.log("MongoDB Connected");


    const accountSchema = mongoose.Schema({
        name: String,
        balance: Number
    });

    const Account = mongoose.model("Account", accountSchema);

    await Account.insertMany([
        { name: "A", balance: 5000 },
        { name: "B", balance: 2000 }
    ]);

    console.log(" Users Accounts Inserted Successfuly........");

    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        await Account.updateOne(
            { name: "A" },
            { $inc: { balance: -1000 } },
            { session }
        );

        await Account.updateOne(
            { name: "B" },
            { $inc: { balance: 1000 } },
            { session }
        );
        await session.commitTransaction();
        console.log("Transaction Successfuly complete ....");
    } catch (err) {
        console.log("Transaction Failed...!");
        console.log(err);
    } finally {
        session.endSession();
    }
    const accounts = await Account.find();
    console.log("Final Accounts:");
    console.log(accounts);
};

main();