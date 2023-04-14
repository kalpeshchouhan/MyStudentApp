import React from "react";
import projstyle from "./project.module.css";

const Projectdocument = () => {
  return (
    <>
      <div className={projstyle.maincontainer}>
        <div>
          <br />
          <p className={projstyle.heading}>Introduction:</p>
          <br />
          <p className={projstyle.para}>
            This project is a web application that allows administrators to
            perform CRUD (Create, Read, Update, Delete) operations on a database
            of student information. The application is built using the MERN
            (MongoDB, Express.js, React, Node.js) stack, which is a popular
            technology stack for building full-stack web applications.
          </p>
          <br />
          <p className={projstyle.heading}>Features:</p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>StudenData:</span> Displays a
            list of all the students in the database. Administrators can use the
            filter section to find specific students by name or class and reset
            button will display all student data.
          </p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>View student:</span>
            Administrators can view the information of a student by clicking on
            view button from student list
          </p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>Delete student:</span> Allows
            administrators to delete a student from the database by clicking on
            the delete button from view student and confirming the deletion.
          </p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>Update student:</span>{" "}
            Administrators can Update the information of an existing student by
            clicking the update button from view student after clicking the
            update button the Administrators will go to update section from
            their the Administrators update the student information.
          </p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>Add student:</span>
            Allows administrators to add a new student to the database by
            providing their personal information such as
            name,rollno,class,ragistration no,father name,mother name,father
            mobile no,mother mobile no, address etc.
          </p>
          <br />
          <p className={projstyle.para}></p>
          <br />
          <p className={projstyle.para}></p>
          <br />
          <p className={projstyle.heading}>Validations:</p>
          <br />
          <p className={projstyle.para}>
            1. In Particular class if roll no is already present in db
            Administrators can not enter same roll no.
            <br />
            2. In db if ragistration no is present Administratiors can not enter
            same ragistrantion no.
            <br />
            3. Can Enter class greatter then 12 or less then 0.
            <br />
            4. Ragistration length should be greatter then 5.
            <br />
            5. Mobile no validation Name validation like spacial char is -
            allowed and length validation Number no allowed or etc..
          </p>
          <br />
          <p className={projstyle.heading}>Architecture:</p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>Front-end:</span> The front-end
            of the application is built using React.js, which is a popular
            JavaScript library for building user interfaces. The front-end is
            responsible for handling user interactions and displaying data to
            the user.
          </p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}>Back-end:</span> The back-end of
            the application is built using Node.js and Express.js, which are
            popular server-side JavaScript frameworks. The back-end is
            responsible for handling API requests, communicating with the
            database, and returning data to the front-end.
          </p>
          <br />
          <p className={projstyle.para}>
            <span className={projstyle.textdoc}> Database:</span> The database
            used for this project is MongoDB, which is a popular NoSQL database.
          </p>
          <br />
          <p className={projstyle.heading}>Conclusion:</p>
          <br />
          <p className={projstyle.para}>
            This project is a simple yet useful example of a web application
            built using the MERN stack. It demonstrates how to perform CRUD
            operations on a database of student information using React.js,
            Node.js, Express.js, and MongoDB. The application can be extended
            and modified to fit the needs of any real-world project.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projectdocument;
