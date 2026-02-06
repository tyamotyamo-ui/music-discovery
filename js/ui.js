// タブ描画
export function renderTabs(all) {
  const tabs = document.getElementById("tabs");
  tabs.innerHTML = "";

  const sources = Object.keys(all); // Spotify / YouTube / Apple / Billboard / Mix

  sources.forEach(src => {
    const btn = document.createElement("button");
    btn.textContent = src;
    btn.className = "tab-button";

    btn.addEventListener("click", () => {
      renderRecommended({ [src]: all[src] });
    });

    tabs.appendChild(btn);
  });
}

// カード描画
export function renderRecommended(all) {
  const container = document.getElementById("recommended-container");
  container.innerHTML = "";

  const source = Object.keys(all)[0];
  const tracks = all[source];

  tracks.forEach(track => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
      <p>${track.genre}</p>
      <span class="source">${track.source}</span>
    `;

    container.appendChild(card);
  });
}

// ローディング表示
export function showSkeleton() {
  const container = document.getElementById("recommended-container");
  container.innerHTML = "<p>読み込み中...</p>";
}

// エラー表示
export function showError(msg) {
  const container = document.getElementById("recommended-container");
  container.innerHTML = `<p style="color:red">${msg}</p>`;
}
