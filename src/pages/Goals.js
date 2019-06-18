// import React, { Component } from 'react';
// import {
//   Container, Col, Form,
//   FormGroup, Label, Input,
//   Button,
// } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import Header from '../Components/Header';


// export default class Goals extends Component { 
//   state = {}
//   render () {                                   
//      return (
//        <Container className="App">
//          <Header title />
        
//     <Form  id="goals" name="goals" method="POST" action="/goals">
//       <Col className="topMargin">
//         <FormGroup >
//           <Label className="colorRed">Goal:</Label>
//           <Input
//             type="text"
//             name="Goal"
//             id="Goal"
//             placeholder="Goal"
//           />
//         </FormGroup>
//       </Col>
//       <Col className="topMargin_bottom">
//         <FormGroup>
//           <Label className="colorRed">Date Finished</Label>
//           <Input
//             type="date"
//             name="DateFinished"
//             id="DateFinished"
//             placeholder="When do you want to finish?"
//           />
//         </FormGroup>
//       </Col>
//       <Col >
//         <FormGroup className="topMargin_white" >
//           <Label className="centerStage">Notes</Label>
//           <Input 
//             type="textarea"
//             name="Notes"
//             id="Notes"
//             placeholder="Tell us more about this goal."
//           />
//         </FormGroup>
//       </Col>
//       <Button component={Link} to="/Users">Submit</Button>
//     </Form>
//     </Container>
     

//      )
//   }
// }

import React, { Component } from 'react';
import {
 Container, Col, Form,
 FormGroup, Label, Input,
 Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


export default class Goals extends Component {
 state = {
 }
 render () {
    return (
      <Container className="App">
        <Header title />
   <Form id="goals" name="goals" method="POST" action="/goals">
     <Col className="topMargin">
       <FormGroup>
         <Label className="colorRed">Goal:</Label>
         <Input
           type="text"
           name="Goal"
           id="Goal"
           placeholder="Goal"
         />
       </FormGroup>
     </Col>
     <Col className="topMargin_bottom">
       <FormGroup>
         <Label className="colorRed">Date Finished</Label>
         <Input
           type="date"
           name="DateFinished"
           id="DateFinished"
           placeholder="When do you want to finish?"
         />
       </FormGroup>
     </Col >
     <Col className="topMargin_white">
       <FormGroup>
         <Label>Notes</Label>
         <Input
           type="textarea"
           name="Notes"
           id="Notes"
           placeholder="Tell us more about this goal."
         />
       </FormGroup>
     </Col>
     <Button component={Link} to="/Users">Submit</Button>
   </Form>


   </Container>


    )
 }
}