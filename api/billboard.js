export default function handler(req, res) {
  res.status(200).json({
    tracks: [
      {
        title: "Billboard Track A",
        artist: "Artist Z",
        genre: "Dance",
        source: "Billboard"
      }
    ]
  });
}
