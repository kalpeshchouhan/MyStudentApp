const express = require("express");
const studentcont = require("../Controllers/Studentcontrollers");

const rout = express.Router();

rout.post("/addstudent", studentcont.Addstudents);
rout.get("/getstudentdata", studentcont.fetchstudentdata);
rout.get("/:regno", studentcont.fetchstudentdatabyreg);
rout.delete("/:regno", studentcont.deletestudentdata);
rout.post("/filterstudent", studentcont.searchbynameandclass);
rout.get("/reg/:byregno", studentcont.fetchtoupdate);
rout.put("/updatestdata/:rgno", studentcont.updatestudentdata);

module.exports = rout;
