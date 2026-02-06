import { fetchAllSources } from "../api.js";
import { generateMixTracks } from "./mix.js";
import { renderRecommended, renderTabs, showSkeleton, showError } from "./ui.js";

async function loadAll() {
  showSkeleton();

  try {
    const all = await fetchAllSources();
    all.Mix = generateMixTracks(all);

    renderRecommended(all);
    renderTabs(all);

    document.getElementById("update-info").textContent = "更新完了";
  } catch (e) {
    console.error(e);
    showError("データ取得に失敗しました");
  }
}

document.getElementById("update-button").addEventListener("click", loadAll);

// 初
