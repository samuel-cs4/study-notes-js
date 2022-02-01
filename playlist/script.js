/**
 * Add a song on screen
 */
function addSong() {

  // Output: A list of songs and artists
  var songList = window.document.getElementById('song-list')

  // Input: Song and Artist
  var song    = window.document.getElementById('input-song')?.value    ?? ''
  var artist  = window.document.getElementById('input-artist')?.value  ?? ''

  if(song === '' || artist === ''){
    window.alert('Some values are empty! Please entry with a value on song and artist inputs.')
    return null
  }

  songList.innerHTML += `<p>${song} - ${artist}</p>`
  
}
