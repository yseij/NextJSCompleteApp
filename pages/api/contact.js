function handler(req, res) {
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

    console.log(newMessage);

    res
      .status(200)
      .json({ message: "Succes data opgeslagen", message: newMessage });
  }
}

export default handler;
