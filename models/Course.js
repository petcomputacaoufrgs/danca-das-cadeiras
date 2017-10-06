var interfacePositioning = require("./utils/position_generator.js");
var InterfaceDiscipline = require("./InterfaceDiscipline.js");

class Course{
	constructor(courseName){
		this.name = courseName;
		this.disciplines = [];
	}
}

Course.prototype.fetchData = function(courseName) {
	this.name = courseName;
	// based on the course name should fill the Course with the correct disciplines #toCaio
	let fakedata = {code:"INF01234", name:"Uma cadeira", professors:["Eu", "Você", "Zubumafu"], dificulty:[1, 4, 100], credits:4};
	this.disciplines.push([fakedata, fakedata, fakedata, fakedata]);
	this.disciplines.push([fakedata, fakedata, fakedata, fakedata, fakedata, fakedata]);
	this.disciplines.push([fakedata, fakedata, fakedata, fakedata, fakedata, fakedata, fakedata]);
	this.disciplines.push([fakedata, fakedata, fakedata, fakedata]);
}


Course.prototype.createInterfaceCourse = function(){
	var interfaceCourse = [];
	for(semester of this.disciplines){
		var interfaceSemester = [];
		for(discipline of semester){
			var interfaceDiscipline = new InterfaceDiscipline(discipline.code, discipline.name, discipline.professors,
															  discipline.dificulty, discipline.credits);
			
			interfaceSemester.push(interfaceDiscipline);
		}
		interfaceCourse.push(interfaceSemester);
	}

	interfacePositioning.generateDrawPositions(interfaceCourse);

	return interfaceCourse;
}

module.exports = Course; 