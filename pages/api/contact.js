import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://nestjs:@cluster0.o0r9z.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "kon niet conecten met db" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "kon de message niet opslaan" });
      return;
    }

    client.close();

    res
      .status(200)
      .json({ message: "Succes data opgeslagen", message: newMessage });
  }
}

export default handler;
