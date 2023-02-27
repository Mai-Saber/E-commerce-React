import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import { toast } from "react-toastify";
import Loading from "../Commons/Loading/Loading";
import { Helmet } from "react-helmet";

function Contact(props) {
  const [loading, setLoading] = useState(true);
  const [toastContent, setToastContent] = useState(false);
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, []);
  //////////////////////////////////////////
  const handleChange = (e) => {
    const newContactState = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(newContactState);
  };
  /////////////////////////////////////////////
  const handleSubmit = () => {
    console.log("contact", contact);
    handleReset();
    setToastContent(!toastContent);
    toast.success("DONE");
  };
  //////////////////////////////////////////
  const handleReset = () => {
    setContact({
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Store | Contact</title>
      </Helmet>
      {/* contact */}
      {loading && <Loading></Loading>}

      {!loading && (
        <div className="contact">
          <div className="content container">
            <Row>
              <Col xs={1} md={6}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5_BrN-sw963xZ-V_3UbJaC0hHIVYc1_qpw&usqp=CAU"
                  alt=""
                />
              </Col>
              <Col xs={12} md={6}>
                <h1>CONTACT US</h1>
                {/* form */}
                <form onSubmit={handleSubmit}>
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Enter Your Name"
                    variant="standard"
                    type="email"
                    autoFocus
                    title="Enter your email"
                    value={contact.email}
                    name="email"
                    onChange={handleChange}
                  />
                  {contact.email.trim() !== "" &&
                    !contact.email.includes("@") && (
                      <p className="alert alert-danger">
                        Please Include "@" in the Email Address
                      </p>
                    )}
                  {/* phone */}

                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Enter Your phone"
                    variant="standard"
                    type="number"
                    minLength={0}
                    maxLength={11}
                    title="Must be 11 digit"
                    value={contact.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                  {contact.phone.trim() !== "" &&
                    contact.phone.length !== 11 && (
                      <p className="alert alert-danger">
                        Phone Number Must Include 11 Digits, The Number You
                        Entered Contains {contact.phone.length}{" "}
                        {contact.phone.length === 1 ? "digit" : "digits"}
                      </p>
                    )}

                  {/* message */}
                  <TextField
                    className="inputField"
                    id="filled-multiline-static"
                    label="Your Message"
                    rows={5}
                    variant="filled"
                    multiline
                    title="Let us know what the problem is..."
                    value={contact.message}
                    name="message"
                    onChange={handleChange}
                  />
                </form>
                <div className="buttons">
                  <button
                    className="btn btn-warning"
                    type="reset"
                    title="Delete all data"
                    onClick={handleReset}
                    disabled={
                      !contact.email &&
                      !contact.message &&
                      !contact.phone &&
                      !contact.subject
                        ? true
                        : false
                    }
                  >
                    Reset
                  </button>

                  <button
                    className="btn btn-primary"
                    type="submit"
                    title="Send Data"
                    onClick={handleSubmit}
                    disabled={
                      !contact.email.includes("@") ||
                      contact.phone.length !== 11 ||
                      !contact.message.trim()
                        ? true
                        : false
                    }
                  >
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
