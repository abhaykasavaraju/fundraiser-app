
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Signin.css'
import { Row, Container, Col } from 'react-bootstrap';

const Signin = () => {
  const [name, setName] = useState('')
  const [roll, setRoll] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPassword] = useState('')
  const [repass, setRepassword] = useState('')
  const [pic, setPic] = useState('')
  const [profilepic, setProfilePic] = useState('')

  const submit = (value) => {


    console.log(name)
    console.log(roll)
    console.log(mail)
    console.log(pass)
    console.log(repass)
    console.log(pic)

    const user = {
      name: name,
      roll: roll,
      mail: mail,
      pass: pass,
      repass: repass,
      image: profilepic

    }
    var fd = new FormData();
    fd.append("name", name);
    fd.append("roll", roll);
    fd.append("mail", mail);
    fd.append("pass", pass);
    fd.append("repass", repass);
    fd.append("image", profilepic);

    axios.post("http://localhost:5000/users/add", fd)
      .then(
        (response) => {
          console.log(response)
        }

      );

      alert("Signed up successfully!")
  }


  return (
    <>


      <div className="div1">
      <h1 style={{color:'white', marginTop:'30px'}}>Sign Up !</h1>
        <form className="form1" enctype="multipart/formdata"  >
          <Container>
            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="rollno" className="form-label">Roll Number</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg " type="text" placeholder="Enter Roll number " id="rollno" name="rollno" onChange={(e) => { setRoll(e.target.value) }} />
              </Col>
            </Row>

            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="name" className="form-label">Name</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg " type="text" placeholder="Enter Name " id="name" name="name" onChange={(e) => { setName(e.target.value) }} />
              </Col>
            </Row>

            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="mail" className="form-label">E-Mail</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg " type="text" placeholder="Enter E-Mail " id="mail" name="mail" onChange={(e) => { setMail(e.target.value) }} />
              </Col>
            </Row>

            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="psw" className="form-label">Password</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg " type="password" placeholder="Enter Password " id="psw" name="psw" onChange={(e) => { setPassword(e.target.value) }} />
              </Col>
            </Row>

            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="psw" className="form-label">Re-enter the Password</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg " type="password" placeholder="Re-Enter Password " id="psw" name="psw" onChange={(e) => { setRepassword(e.target.value) }} />
              </Col>
            </Row>

            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="id" className="form-label">Upload ID Card</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg form-control-file " type="file" id="id" name="id" onChange={(e) => { setPic(e.target.files[0]) }} />
              </Col>
            </Row>

            <Row>
              <Col lg={5} style={{ paddingTop: '20px', color: 'white', fontSize: '30px' }}>
                <label for="image" className="form-label">Upload your picture</label>
              </Col>
              <Col lg={7} style={{ paddingTop: '10px' }}>
                <input className="col form-control form-control-lg form-control-file " type="file" id="image" name="image" onChange={(e) => { setProfilePic(e.target.files[0]) }} />
              </Col>
            </Row>

            {/* <label for="pic"><b>Upload the college ID</b></label><br /><br />
          <input type="file" id="myFile" name="filename" onChange={(e) => { setPic(e.target.value) }} /> */}

            {/* <label for="profilepic"><b>Upload Your Picture</b></label><br /><br />
          <input type="file" id="image" name="image" className="form-control-file" onChange={(e) => { setProfilePic(e.target.files[0]) }} /> */}

            <Link to="/login"><button style={{marginLeft:'500px',marginTop:'60px'}} type="submit" className="btn btn-success" onClick={submit} >Sign Up</button></Link>

          </Container>
        </form>
      </div>
    </>
  )


}




export default Signin;