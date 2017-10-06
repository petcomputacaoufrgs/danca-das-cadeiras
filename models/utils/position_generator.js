// getMaxSublistLength: listOfLists -> int
// take a list where each element is a another list and returns the longest of these lists
function getMaxSublistLength(listOfLists){
	var longestListLength = 0;
	listOfLists.forEach(function(thisList){
		if(longestListLength < thisList.length)
			longestListLength = thisList.length;
	});
	return longestListLength;
}

// generateDrawPositions: given a course, inserts on every discipline
// in every semester of the course a position for the front end 
// interface to use on the placement
function generateDrawPositions(course){
	var disciplineWidth = 300;
	var spacing = 40;
	var maxSize = getMaxSublistLength(course);
	course.forEach(function(semester){
		diff = maxSize - semester.length;
		let desloc = diff/2;

		// if(diff%2 == 0)
		// 	perfectlyAligned();
		// else
		// 	unAligned();
		
		semester.forEach(function(discipline, index){
			discipline.position = (index + desloc)*(disciplineWidth + spacing) + 50; //+ constant;//if there is any constant, test later
		});
	});
}
module.exports = {generateDrawPositions, getMaxSublistLength};