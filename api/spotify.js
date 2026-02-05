export default function handler(req, res) {
  res.status(200).json({
    tracks: [
      {
        title: "Sample Song A",
        artist: "Artist A",
        genre: "Pop",
        source: "Spotify"
      },
      {
        title: "Sample Song B",
        artist: "Artist B",
        genre: "EDM",
        source: "Spotify"
      }
    ]
  });
}
