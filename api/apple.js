export default function handler(req, res) {
  res.status(200).json({
    tracks: [
      {
        title: "Apple Music Track A",
        artist: "Artist X",
        genre: "Pop",
        source: "Apple"
      },
      {
        title: "Apple Music Track B",
        artist: "Artist Y",
        genre: "Rock",
        source: "Apple"
      }
    ]
  });
}
