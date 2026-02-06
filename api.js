// 4つの API からデータをまとめて取得する中心関数
export async function fetchAllSources() {
  const [sp, yt, ap, bb] = await Promise.all([
    fetch("/api/spotify").then(r => r.json()),
    fetch("/api/youtube").then(r => r.json()),
    fetch("/api/apple").then(r => r.json()),
    fetch("/api/billboard").then(r => r.json())
  ]);

  return {
    Spotify: sp.tracks,
    YouTube: yt.tracks,
    Apple: ap.tracks,
    Billboard: bb.tracks
  };
}
