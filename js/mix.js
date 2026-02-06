export function generateMixTracks(all) {
  const flat = [
    ...all.Spotify,
    ...all.YouTube,
    ...all.Apple,
    ...all.Billboard
  ];

  // 透明感スコア・重み調整ロジックをここにそのまま移植
  // clarityScore, yourStyleScore, rarityScore, trendScore
  // 最終 score = clarity*2 + style*1.5 + rarity*1 + trend*0.7

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
