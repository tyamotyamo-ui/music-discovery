export default function handler(req, res) {
  res.status(200).json({
    tracks: [
      {
        title: "YouTube Track A",
        artist: "Creator A",
        genre: "Electronic",
        source: "YouTube"
      },
      {
        title: "YouTube Track B",
        artist: "Creator B",
        genre: "Dance",
        source: "YouTube"
      }
    ]
  });
}
