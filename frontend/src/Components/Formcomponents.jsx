import fo from "./Form.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Formvalidationhoc from "./Formvalidationhoc";
import {BASEURL} from "../helper"


const Formcomponents = (porps) => {
  const [rollnovalidation, setrollnovalidation] = useState("");
  const [ragvalidation, setragvalidation] = useState("");
  const [bodercolor, setbodercolor] = useState({});
  const [forms, setformsdata] = useState({
    name: "",
    rollno: "",
    class: "",
    ragistrationno: "",
    fathername: "",
    mothername: "",
    fathermobileno: "",
    mothermobileno: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (porps.validateForm(forms)) {
      await axios
        .post(`${BASEURL}/student/addstudent`, forms)
        .then((Response) => {
          console.log(Response);
          swal("Good job!", "Your form  is submitted successfully!", "success");
          setrollnovalidation("");
          setragvalidation("");

          // After the submit the form successfully set the input feild empty
          setformsdata({
            name: "",
            rollno: "",
            class: "",
            ragistrationno: "",
            fathername: "",
            mothername: "",
            fathermobileno: "",
            mothermobileno: "",
            street: "",
            city: "",
            state: "",
            zip: "",
          });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.message === "rollno present") {
            setrollnovalidation("Rollno can't be Same in one class!");
            setbodercolor({
              boder: "1px solid #42a5f5",
            });
          }
          if (error.response.data.message === "Ragistarno already present") {
            setragvalidation("Ragistration already present!");
          }
        });
    }
  };
  let handlechange = (e) => {
    let { name, value } = e.target;

    setformsdata({ ...forms, [name]: value });
  };
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className={fo.main}
      >
        <div className={fo.maincontainer}>
          <form onSubmit={handlesubmit}>
            <div>
              <div>
                <input
                  type="text"
                  name="name"
                  style={bodercolor}
                  value={forms.name}
                  placeholder="Enter Student Name"
                  onChange={handlechange}
                />
                {porps.formerror.name ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.name}
                  </span>
                ) : null}

                <input
                  type="text"
                  name="class"
                  value={forms.class}
                  placeholder="Enter Class"
                  onChange={handlechange}
                />
                {porps.formerror.class ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.class}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="fathername"
                  value={forms.fathername}
                  placeholder="Enter Father name"
                  onChange={handlechange}
                />
                {porps.formerror.fathername ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.fathername}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="fathermobileno"
                  placeholder="Enter father Mobile no"
                  value={forms.fathermobileno}
                  onChange={handlechange}
                />
                {porps.formerror.fathermobileno ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.fathermobileno}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={forms.street}
                  onChange={handlechange}
                />
                {porps.formerror.street ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.street}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={forms.state}
                  onChange={handlechange}
                />
                {porps.formerror.state ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.state}
                  </span>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="rollno"
                  value={forms.rollno}
                  placeholder="Enter Student Roll no"
                  onChange={handlechange}
                />
                {rollnovalidation ? (
                  <p
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {rollnovalidation}
                  </p>
                ) : null}
                {porps.formerror.rollno ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.rollno}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="ragistrationno"
                  value={forms.ragistrationno}
                  placeholder="Enter Ragistration no"
                  onChange={handlechange}
                />
                {ragvalidation ? (
                  <p
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {ragvalidation}
                  </p>
                ) : null}
                {porps.formerror.ragistrationno ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.ragistrationno}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="mothername"
                  value={forms.mothername}
                  placeholder="Enter Mother name"
                  onChange={handlechange}
                />
                {porps.formerror.mothername ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.mothername}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="mothermobileno"
                  placeholder="Enter Mother Mobile no"
                  value={forms.mothermobileno}
                  onChange={handlechange}
                />
                {porps.formerror.mothermobileno ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.mothermobileno}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={forms.city}
                  onChange={handlechange}
                />
                {porps.formerror.city ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.city}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip code"
                  value={forms.zip}
                  onChange={handlechange}
                />
                {porps.formerror.zip ? (
                  <span
                    style={{
                      color: "#42a5f5",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {porps.formerror.zip}
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              {" "}
              <button className={fo.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Formvalidationhoc(Formcomponents);
