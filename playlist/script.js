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

// * * * * * * * * * Event Listeners * * * * * * * * * //

// Get `btn-add` button properties
var btnAdd = window.document.getElementById('btn-add')

// Change backgroud color of button
function enter() {
  btnAdd.style.background = '#1aa34a'
}

// Returns the original backgroud color
function exit() {
  btnAdd.style.background = '#1db954'
}

function click() {
  // Inputs
  let inputSong   = window.document.getElementById('input-song')
  let inputArtist = window.document.getElementById('input-artist')

  // Clear the inputs text area
  inputSong.value   = ''
  inputArtist.value = ''
}

// Create Event listeners to the button
btnAdd.addEventListener('mouseenter', enter)
btnAdd.addEventListener('mouseout', exit)
btnAdd.addEventListener('click', click)