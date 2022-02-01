/**
 * Add a song on screen
 */
function addSong() {
  var songList = window.document.getElementById('song-list')

  var song = window.document.getElementById('input-song').value
  var artist = window.document.getElementById('input-artist').value

  songList.innerHTML += `<p>${song} - ${artist}</p>`
  
}
