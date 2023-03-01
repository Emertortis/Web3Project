import './webpage.css';
import React, { useState, useEffect } from 'react';
import NumericInput from 'react-numeric-input';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Data from './classData/Class.json'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';



function ER_webpage() {

    const getDropdownValue = () => {
        
        //Finds name of dropdown
        const value = "Hero";
        return value;
      };

      const getDropdownStat= () => {
        
        const filteredProducts = Data.filter(statValue => statValue.vigor === statValue.name.match(value)).map(post=>(post.vigor))
        return filteredProducts;
      }; 

      const [value, setValue] = useState(getDropdownValue);
      const [filteredProducts, setfilteredProducts] = useState(getDropdownStat);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };
      console.log(filteredProducts)




      

    return (

        <div className="ER_webpage">
            <Row className='header'>
                <Col md>
                    <h1>Elden Ring Character Builder</h1>
                </Col>
                <Col md>
                    <Link to='/Login'><button>login</button></Link>
                </Col>
            </Row>

            <Row className="g-2">
                <Col md>
                    <div className="characterName">
                        <FloatingLabel label="Character Name">
                            <Form.Control type="text" placeholder="Character Name" />
                        </FloatingLabel>
                    </div>
                </Col>

                <Col md>
                    <div className="startingClass">
                        <FloatingLabel controlId="floatingSelect" label="Starting Class">
                            <Form.Group as={Col} controlId="dropdownItem">
                                <Form.Control as="select" value={value} onChange={handleChange} >
                                    {
                                        Data.map(post => {

                                            return (
                                                
                                                <option>{post.name}</option> //Grabs name data from json file
                                                
                                            )
                                            
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>
                        </FloatingLabel>
                        <p>{`You selected ${value}`}</p>
                        <p>{`${value}'s stat is ${filteredProducts} `}</p>
                    </div>
                </Col>
            </Row>

            <div className='playerLevel'>
                <ListGroup horizontal>
                    <ListGroup.Item>Player level</ListGroup.Item>
                    <ListGroup.Item><NumericInput min={0} max={713} value={1} /></ListGroup.Item>
                </ListGroup>
            </div>



            <div className='attributePoint'>

                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Attribute Points</Form.Label>

                            <ListGroup horizontal>
                                <ListGroup.Item>Vigor</ListGroup.Item>
                                        {
                                            Data.filter(statValue=> statValue.name.match(value)===statValue.vigor).map(post=>
                                                <ListGroup.Item><NumericInput min={0} max={99} value={post.vigor} onChange={handleChange}/></ListGroup.Item>
                                            )}
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Mind</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Endurance</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Strength</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Dexterity</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Intelligence</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Faith</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>

                            <ListGroup horizontal>
                                <ListGroup.Item>Arcane</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                        </Col>


                        <Col>
                            <Form.Label>Base Stats</Form.Label>
                            <ListGroup horizontal>
                                <ListGroup.Item>HP</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Mind</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>FP</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Stamina</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Max Equip Load</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Attack Power</Form.Label>
                            <ListGroup horizontal>
                                <ListGroup.Item>R Armament 1</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>R Armament 2</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>R Armament 3</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>L Armament 1</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>L Armament 2</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>L Armament 3</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                        </Col>


                        <Col>
                            <Form.Label>Defense Power</Form.Label>
                            <ListGroup horizontal>
                                <ListGroup.Item>Physical</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>VS Strike</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>VS Slash</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>VS Pierce</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Magic</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Fire</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Lightning</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item>Holy</ListGroup.Item>
                                <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>





        </div>
    );
}
export default ER_webpage;