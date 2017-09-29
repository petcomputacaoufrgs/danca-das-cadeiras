class InterfaceDiscipline {
	constructor(code, name, professors, dificulty, credits){
		this.code = code;
		this.name = name;
		this.professors = professors;
		this.dificulty = dificulty;
		this.credits = credits;
		this.position;
	}
}
module.exports = InterfaceDiscipline;