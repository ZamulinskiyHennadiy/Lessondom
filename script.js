//Створюємо список пісень
document.addEventListener('DOMContentLoaded', function () {
var playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" }
];

  var playlistElement = document.getElementById('playlist');
  playList.forEach(function (track) {
    var listItem = document.createElement('li');
    listItem.textContent = track.author + " - " + track.song;
    playlistElement.appendChild(listItem);
  });

  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');

  // Відкриття модального вікна
  openBtn.onclick = function () {
    modal.style.display = 'flex';
  };

  // Закриття модального вікна
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };
  
  //Закриваємо вікно коли клікаємо будь де
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});