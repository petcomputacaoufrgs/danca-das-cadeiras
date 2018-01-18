class Course{
    //Starts the class empty or with the JSONs of the path given
    constructor(){
        this.courseInfo = []
    }
    //Creates a list of JSONs based on the excel tables located at the parameter given as argument or on  /models/utils/database_excel
    //If it works, then call the function passed as callback
    //Creates a 
    readFiles(databaseExcelFolder="./models/utils/database_excel", callbackFunction){
        var xlsx = require("xlsx");
        var fs = require('fs'); 
        var classReference = this;
        fs.readdir(databaseExcelFolder, function(err, courses){
            console.log("One");
            if (err) return callbackFunction(err);
            else{    
                    courses.forEach(function(fileName){
                        console.log("Two");
                        var course = xlsx.readFile(databaseExcelFolder + "/" + fileName);
                        classReference.courseName = course.SheetNames[0]
                        var courseSheet = course.Sheets[classReference.courseName];
                        var courseJSON = xlsx.utils.sheet_to_json(courseSheet);
                        classReference.courseInfo.push(courseJSON);
                    })
                }
            return callbackFunction(undefined);
        });
        
    }
    //Updates the database based on the current JSONs
    updatedatabase(){
        var mongoose = require("mongoose")
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/Chair_Dance", { useMongoClient: true });
        
        var disciplineSchema = new mongoose.Schema({
            code: String,
            semester: Number,
            credits: Number,
            tests: Number,
            testsDates: [{testDate:Number}],
            assignments: Number,
            assignmentsDates: [{assignmentDate:Number}],
            finalAssignment: Number,
            finalAssignmentDate: Number,
            requiredDisciplines: [{requiredDiscipline:String}]
        });

        var course = mongoose.model(this.courseName, disciplineSchema);

        
        this.courseInfo.forEach(function(courseJSON){
                for (var disciplineIndex = 0; disciplineIndex < courseJSON.length; disciplineIndex++){
                    var discipline = courseJSON[disciplineIndex];

                    var tests = [];
                    for(var test = 1; test <= discipline["Tests"]; test++){
                        var testObj = {
                            testDate: discipline["Date " + test]
                        }
                        tests.push(testObj)

                    }

                    var assignmentNumber = (discipline["Assignments"] == "NULL" ? 0 : discipline["Assignments"])
                    var assignments = [];
                    for(var assignment = 0; assignment < assignmentNumber; assignment++)
                        var assignmentObj = {
                            assignmentDate: discipline["Date " + (assignment + 6)]
                        }
                        assignments.push(assignmentObj);

                    var finalAssignment = (discipline["FinalAssignments"] == "NULL" ? 0 : discipline["FinalAssignments"]);
                    var finalAssignmentDate = (discipline["FinalAssignments"] == "NULL" ? 0 : discipline["Date 10"]);
               
                    var current_required = 1;
                    var requiredDisciplines = [];
                    while (discipline["Required " + current_required] != "NULL"){
                        var requiredDisciplineObj = {
                            requiredDiscipline: discipline["Required " + current_required]
                        }
                        requiredDisciplines.push(requiredDisciplineObj);
                        current_required++;
                    }

                    var disciplineDB = new course({
                        code: discipline["Code"],
                        semester: discipline["Semester"],
                        credits: discipline["Credits"],
                        tests: discipline["Tests"],
                        testsDates: tests,
                        assignments: assignmentNumber,
                        assignmentsDates: assignments,
                        finalAssignment: finalAssignment,
                        finalAssignmentDate: finalAssignmentDate,
                        requiredDisciplines: requiredDisciplines
                    });

                    disciplineDB.save(function(err, discipline){
                        if (err) throw Error("Error saving DB");
                        else console.log(discipline);
                    });


                }
            })
        

    
    }
}


function openDisciplines(){


    console.log("OI");

}



module.exports = {Course : Course};



