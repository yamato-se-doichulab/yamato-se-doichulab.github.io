const pages = ["JRSuitaHTML.html", "HankyuSuitaHTML.html", "HankyuToyotsuHTML.html", "BusHTML.html"];
let currentPageIndex = 0;
const pageContainer = document.getElementById("page-container");

function showPage() {
  const pageUrl = pages[currentPageIndex];
  pageContainer.innerHTML = `<iframe src="${pageUrl}" width="800" height="600"></iframe>`;
  currentPageIndex = (currentPageIndex + 1) % pages.length; // 次のページへ
}

function doReloadNoCache(){
  window.location.reload(true);
}

function checkAndReloadAtMidnight() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;

  if (currentTime === "00:00:00") {
    doReloadNoCache();
    // 必要であれば、ここでインターバルを停止することもできます
    // clearInterval(midnightReloadInterval);
  }
}

function openFullscreen() {
  const fullscreenElement = document.documentElement; // 全画面表示にする要素
  if (fullscreenElement.requestFullscreen) {
    fullscreenElement.requestFullscreen();
  } else if (fullscreenElement.mozRequestFullScreen) { /* Firefox */
    fullscreenElement.mozRequestFullScreen();
  } else if (fullscreenElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    fullscreenElement.webkitRequestFullscreen();
  } else if (fullscreenElement.msRequestFullscreen) { /* IE/Edge */
    fullscreenElement.msRequestFullscreen();
  }
}

function checkAndOpenFullscreenAtMidnight() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;

  if (currentTime === "00:00:05") {
    openFullscreen();
    // 必要であれば、ここでインターバルを停止することもできます
    // clearInterval(midnightFullscreenInterval);
  }
}

// 初回ページ表示
showPage();

// ページ切り替えを25秒ごとに行う
setInterval(showPage, 25000);

// 1分ごとに時刻を確認し、00:00:00になったら更新を実行
const midnightReloadInterval = setInterval(checkAndReloadAtMidnight, 60000);

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('fullscreenButton');

  button.addEventListener('click', function() {
    openFullscreen();
    button.style.display = 'none'; // ボタンを非表示にする
  });

  // 全画面表示が解除されたときにボタンを再表示する場合
  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) { // 全画面表示が解除された場合
      button.style.display = 'block'; // ボタンを再表示する
    }
  });

  // 1分ごとに時刻を確認し、00:00:05になったら全画面表示を実行
  const midnightFullscreenInterval = setInterval(checkAndOpenFullscreenAtMidnight, 60000);
});

