import './webpage.css';
import NumericInput from 'react-numeric-input';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function ER_webpage() {
    return (
        <div className="ER_webpage">

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
                            <Form.Select aria-label="Floating label select example" className="classList">
                                <option selected value="None">None</option>
                                <option value="Hero">Hero</option>
                                <option value="Bandit">Bandit</option>
                                <option value="Astrologer">Astrologer</option>
                            </Form.Select>
                        </FloatingLabel>
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
                        <ListGroup.Item><NumericInput min={0} max={99} value={1} /></ListGroup.Item>
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