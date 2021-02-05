import { Student } from "./student";
import { Internship } from "./internship";
import { Map } from "./map";

// declare map, student, internship
const map = new Map("map");
const student: Student = new Student();
const internship: Internship = new Internship();

// add markers with popup message.
map.addMarker(student);
map.addMarker(internship);


