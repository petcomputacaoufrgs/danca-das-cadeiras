allDisciplines = [
	[{nome: 'a0'}, {nome: 'b0'}, {nome: 'c0'}, {nome: 'd0'}],
	[{nome: 'a1'}, {nome: 'b1'}, {nome: 'c1'}, {nome: 'd1'}, {nome: 'e1'}, {nome: 'f1'}]
];

// getMaxSublistLength: 
function getMaxSublistLength(listOfLists){
	var longestListLength = 0;
	listOfLists.forEach(function(thisList){
		if(longestListLength < thisList.length)
			longestListLength = thisList.length;
	});
	return longestListLength;
}
var positions = [];
var disciplineWidth = 300;
var maxSize = getMaxSublistLength(allDisciplines);
allDisciplines.forEach(function(semesterDisciplines, semester){
	positions[semester] = [];
	diff = maxSize - semesterDisciplines.length;
	
	// if(diff%2 == 0)
	// 	perfectlyAligned();
	// else
	// 	unAligned();
	
	semesterDisciplines.forEach(function(discipline, index){
		positions[semester][index] = (index + desloc)*disciplineWidth + constant;//if there is any constant, test later
	});
});

module.exports = {positions};