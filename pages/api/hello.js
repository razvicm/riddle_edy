// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const anwers = {
  "challenge1": "abc",
  "challenge2": "def",
  "challenge3": "3",
  "challenge4": "4"
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { value, challenge } = req.body;
    // Process a POST request
    console.log(req.body.value);
    if (value === anwers[challenge])
      return res.status(200).json({ status: "correct" });

    else return res.status(200).json({ status: "wrong" });

  }
  console.log("object");
  res.status(200).json({ success: true })
}
