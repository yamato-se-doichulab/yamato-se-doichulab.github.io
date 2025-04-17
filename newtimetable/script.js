// script.js
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月は0から始まるため+1
    const day = now.getDate();
    const week = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()]; // 曜日を取得

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('date').textContent = `${month}月${day}日(${week})`;
    document.getElementById('time').textContent = `${hours}:${minutes}`;
    document.getElementById('seconds').textContent = seconds;
}

// 1秒ごとに時刻を更新
setInterval(updateTime, 1000);

// 初期表示
updateTime();

// スクロールテキストのアニメーション制御（CSSで行っているため、ここでは不要な場合が多い）
// 必要に応じてJavaScriptで制御する場合に追加
const scrollText = document.querySelector('.scroll-text');
// 例: アニメーションの速度調整など
// scrollText.style.animationDuration = '15s';