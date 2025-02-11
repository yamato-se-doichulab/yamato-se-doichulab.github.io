const pages = ["JRSuitaHTML.html", "HankyuSuitaHTML.html", "HankyuToyotsuHTML.html", "BusHTML.html"];
let currentPageIndex = 0;
const pageContainer = document.getElementById("page-container");

function showPage() {
  const pageUrl = pages[currentPageIndex];
  pageContainer.innerHTML = `<iframe src="${pageUrl}" width="800" height="600"></iframe>`;
  currentPageIndex = (currentPageIndex + 1) % pages.length; // 次のページへ
}

// 初回表示
showPage();

// 一定時間ごとにページを切り替え
setInterval(showPage, 25000); // 5秒ごとに切り替え

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('fullscreenButton');
    const fullscreenElement = document.documentElement; // 全画面表示にする要素
  
    button.addEventListener('click', function() {
      openFullscreen();
      button.style.display = 'none'; // ボタンを非表示にする
    });
  
    function openFullscreen() {
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
  
    // 全画面表示が解除されたときにボタンを再表示する場合
    document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) { // 全画面表示が解除された場合
        button.style.display = 'block'; // ボタンを再表示する
      }
    });
  });