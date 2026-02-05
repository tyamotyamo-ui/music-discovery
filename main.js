document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("discover-btn");
    const text = document.getElementById("discovery-text");

    const discoveries = [
        "新しい音楽ジャンルを発見しました",
        "今日は良いメロディが浮かびそうです",
        "知らなかったコード進行に出会いました",
        "新しいアイデアが生まれそうです",
        "音の組み合わせに可能性を感じます"
    ];

    btn.addEventListener("click", () => {
        const random = Math.floor(Math.random() * discoveries.length);
        text.textContent = discoveries[random];
    });
});
