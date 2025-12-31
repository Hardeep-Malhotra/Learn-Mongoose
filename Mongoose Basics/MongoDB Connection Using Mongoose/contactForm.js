import express from "express";
import Contact from "./contactSchema.js";


const router = express.Router();

router.post("/contact", async (req, res) => {
    try {
        const contact = new Contact({
            name: req.body.name,
            email: req.body.email,
            Phone_no: req.body.Phone_no
        });
        console.log(contact);


        await contact.save();
        res.status(201).send("Contact saved successfully ✅");

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong while saving data ❌");
    }
});

export default router;
