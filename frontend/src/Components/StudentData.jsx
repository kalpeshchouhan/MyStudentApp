import React, { useEffect, useState, useCallback, Fragment } from "react";
import dt from "./studentdata.module.css";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../helper";
import Reactspinner from "./Reactspinner";
import { v4 as uuidv4 } from "uuid";

const log = console.log;

function StudentData() {
  const [loading, setLoading] = useState(false);
  const [stdata, setstdata] = useState([]);
  const [regno, setregno] = useState(0);
  const [listdata, setlistdata] = useState([]);
  const [delectdata, setdelectdata] = useState(0);
  const [open, setOpen] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [count, setcount] = useState(0);

  // -----------------------Page-Navigaiton Hooks----------------------------------------------------
  const navigate = useNavigate();

  // -----------------------Fiter form handling-------------------------------------------------------
  const [form, setform] = useState({
    name: "",
    class: "",
  });
  const searchhandleonchange = (e) => {
    let { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  // -----------------------Filter sending to api -------------------------------------------------------
  const searchhandlesubmit = useCallback(
    async (e) => {
      setLoading(true);
      e.preventDefault();

      await axios
        .post(`${BASEURL}/student/filterstudent`, form)
        .then((response) => {
          setLoading(false);
          setstdata(response.data.data);
          setform({
            name: "",
            class: "",
          });
        });
    },
    [form]
  );

  // -----------------------React-Resoponsive-modal-fuction----------------------------------------------

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenModaltwo = () => setOpentwo(true);
  const onCloseModaltwo = () => setOpentwo(false);

  // -----------------------Fetching-particular-student-data-by-ragistrationno---------------------------
  useEffect(() => {
    const fetchparticularstudentdata = async () => {
      setLoading(true);
      await axios
        .get(`${BASEURL}/student/${regno}`)
        .then((response) => {
          setLoading(false);
          setlistdata(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchparticularstudentdata();
  }, [regno]);

  // -----------------------Fetching all student data----------------------------------------------------
  useEffect(() => {
    setLoading(true);
    const getallsutudentdata = async () => {
      await axios
        .get(`${BASEURL}/student/getstudentdata`)
        .then((response) => {
          setLoading(false);
          setstdata(response.data.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
    getallsutudentdata();
  }, [count]);

  // -----------------------Delectstudent data and set the student data------------------------------------
  useEffect(() => {
    const deletstudentdata = async () => {
      await axios
        .delete(`${BASEURL}/student/${delectdata}`)
        .then(async () => {
          await axios
            .get(`${BASEURL}/student/getstudentdata`)
            .then((response) => {
              setstdata(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          log(error);
        });
    };
    deletstudentdata();
  }, [delectdata]);

  // -----------------------Return jsx----------------------------------------------------
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.outerHeight, transition: { duration: 0.1 } }}
        className={dt.maincotainer}
      >
        <div className={dt.filter}>
          <form onSubmit={searchhandlesubmit}>
            <p>Filter</p>
            <input
              type="text"
              placeholder="Enter Student...."
              name="name"
              value={form.name}
              onChange={searchhandleonchange}
            />
            <input
              type="text"
              placeholder="Enter class..."
              name="class"
              value={form.class}
              onChange={searchhandleonchange}
            />
            <button type="submit">Search</button>
          </form>
          <button
            onClick={() => {
              setcount(count + 1);
            }}
          >
            Reset
          </button>
        </div>
        <div className={dt.incontainer}>
          <div className={dt.heading}>
            <div>
              <p>Rag.No</p>
            </div>
            <div>
              <p>Name</p>
            </div>
            <div>
              <p>RollNo</p>
            </div>
            <div>
              <p>Class</p>
            </div>
            <div>
              <p>Detail</p>
            </div>
          </div>
          {loading ? (
            <Reactspinner />
          ) : // Render the data here

          stdata.length > 0 ? (
            stdata.map((item) => (
              <div className={dt.listd} key={item.id ? item.id : uuidv4()}>
                <div>
                  <p>{item.ragistrationno}</p>
                </div>
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.rollno}</p>
                </div>
                <div>
                  <p>{item.classes}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      onOpenModal(true);
                      setregno(item.ragistrationno);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p
              style={{
                fontSize: "1.5rem",
                color: "red",
                fontFamily: "monospace",
              }}
            >
              No Data Found......
            </p>
          )}
          {/* -----------------------Modal one loading---------------------------------------------------- */}

          <Modal
            open={open}
            onClose={onCloseModal}
            center
            animationDuration={400}
          >
            {listdata.map((item) => (
              <>
                <div
                  className={dt.modalmaincontainer}
                  key={item.id ? item.id : uuidv4()}
                >
                  <div className={dt.insidedivone}>
                    <div>
                      <p>Student-Details</p>
                      {/* <button onClick={() => onCloseModal(false)}>X</button> */}
                    </div>
                  </div>
                  <div className={dt.insidedivtwo}>
                    <div>
                      <div>
                        <p>
                          Student Name: <span> {item.name}</span>
                        </p>
                        <p>
                          Student Roll No: <span> {item.rollno}</span>
                        </p>
                        <p>
                          Student Class: <span> {item.classes}</span>
                        </p>
                        <p>
                          {" "}
                          Ragistration No: <span>{item.ragistrationno}</span>
                        </p>
                        <p>Address</p>
                        {item.address.map((items) => {
                          return (
                            <>
                              <p>
                                Street: <span> {items.street}</span>
                              </p>
                              <p>
                                City: <span> {items.city}</span>
                              </p>
                              <p>
                                State: <span> {items.state}</span>
                              </p>
                              <p>
                                Zip Code: <span> {items.zip}</span>
                              </p>
                            </>
                          );
                        })}
                      </div>
                      <div>
                        <p>
                          Father Name: <span>{item.fathername}</span>
                        </p>
                        <p>
                          mother Name: <span>{item.mothername}</span>
                        </p>
                        <p>
                          Father Phone No: <span>{item.fatherphoneno}</span>
                        </p>
                        <p>
                          Mother Phone No: <span>{item.motherphoneno}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={dt.insidedivthree}>
                    <div>
                      <button
                        onClick={() => {
                          navigate("/update", {
                            state: { data: item.ragistrationno },
                          });
                        }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => {
                          onOpenModaltwo(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                {/* -----------------------Modal two loading---------------------------------------------------- */}
                <Modal open={opentwo} onClose={onCloseModaltwo} center>
                  <p className={dt.paragrahp}>
                    Your Sure You Want To Delete The Data....
                  </p>
                  <div className={dt.btndiv}>
                    <button
                      onClick={() => {
                        onCloseModaltwo(false);
                        onCloseModal(false);
                        setdelectdata(item.ragistrationno);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        onCloseModaltwo(false);
                      }}
                    >
                      Cancle
                    </button>
                  </div>
                </Modal>
              </>
            ))}
          </Modal>
        </div>
      </motion.div>
    </>
  );
}

export default StudentData;
