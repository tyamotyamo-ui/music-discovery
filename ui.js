import { fetchAnalysis, getCachedAnalysis, saveCachedAnalysis, formatAnalysisHTML } from "./analysis.js";

export function showSkeleton() { ... }
export function showError(msg) { ... }

export function createTrackCard(track) {
  const card = document.createElement("div");
  card.className = "card";

  // タイトル・メタ情報・バッジなど生成

  const detail = document.createElement("div");
  detail.className = "detail-content";

  const toggle = document.createElement("div");
  toggle.className = "toggle-detail";
  toggle.innerHTML = `<span>詳細を開く</span><span>▾</span>`;

  let opened = false;

  toggle.addEventListener("click", async () => {
    opened = !opened;

    if (opened) {
      const cached = getCachedAnalysis(track);

      if (cached) {
        detail.innerHTML = cached;
        detail.classList.add("open");
        toggle.innerHTML = `<span>詳細を閉じる</span><span>▴</span>`;
        return;
      }

      detail.innerHTML = `<span class="loading-dots">●●●</span>`;

      try {
        const analysis = await fetchAnalysis(track);
        const formatted = formatAnalysisHTML(analysis);

        saveCachedAnalysis(track, formatted);
        detail.innerHTML = formatted;
        detail.classList.add("open");
      } catch {
        detail.innerHTML = `<div class="error-box">分析に失敗しました。</div>`;
      }
    } else {
      detail.classList.remove("open");
    }

    toggle.innerHTML = opened
      ? `<span>詳細を閉じる</span><span>▴</span>`
      : `<span>詳細を開く</span><span>▾</span>`;
  });

  card.appendChild(toggle);
  card.appendChild(detail);
  return card;
}

export function renderRecommended(all) { ... }
export function renderTabs(all) { ... }
