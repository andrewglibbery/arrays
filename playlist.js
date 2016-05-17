var playList = [
  ['I Did It My Way', 'Childish Gambino'],
  ['Respect', 'Chance the Rapper'],
  ['Imagine', 'Run the Jewels'],
  ['Born to Run', 'Anderson Paak'],
  ['Louie Louie', 'A$ap Rocky'],
  ['Maybellene', 'Vic Mensa'],
];

function print(message) {
  document.write(message);
}

function printList(songs) {
	var listHTML = '<ol>';
		for (var i = 0; i < songs.length; i += 1) {
			listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
		}
	listHTML += '</ol>';
	print(listHTML);
}

printList(playList);
