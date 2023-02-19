import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { Bars } from "react-loader-spinner";
import "./Contact.css";

function Contact(props) {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(true);

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
    setDisabled(!disabled);
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
      {loading && (
        <Bars
          height="550"
          width="80"
          color="var(--main-color)"
          ariaLabel="bars-loading"
          wrapperStyle={{
            marginLeft: "650px",
          }}
          wrapperClass=""
          visible={true}
        />
      )}
      {!loading && (
        <div className="contact">
          <div className="cover">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8xz-CfahhOINAxdJ28ZfKJMCNv7dIQIw5kgid6jAIFPjopKglSbuNpZoPb1zRxsfQQg&usqp=CAU"
              alt=""
            />
          </div>

          <div className="content container">
            <Row>
              <Col xs={6}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5_BrN-sw963xZ-V_3UbJaC0hHIVYc1_qpw&usqp=CAU"
                  alt=""
                />
              </Col>
              <Col xs={6}>
                <h1>CONTACT US</h1>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Enter Your Email"
                    variant="standard"
                    type="email"
                    autoFocus
                    title="It must include @ and '.'"
                    value={contact.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Enter Your phone"
                    variant="standard"
                    type="tel"
                    minLength={0}
                    maxLength={11}
                    title="Must be 11 digit"
                    value={contact.phone}
                    name="phone"
                    onChange={handleChange}
                  />

                  <TextField
                    className="inputField"
                    id="standard-basic"
                    label="Subject"
                    variant="standard"
                    type="text"
                    title="Write your subject here"
                    value={contact.subject}
                    name="subject"
                    onChange={handleChange}
                  />
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
                  >
                    Reset
                  </button>

                  <button
                    className="btn btn-primary"
                    type="submit"
                    title="Send Data"
                    onClick={handleSubmit}
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