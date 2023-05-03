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
import Fetch from './fetch';
import useLocalStorage from './Save-progress';
import Runes from './Runes';
import WeaponsDropdown from './Weapons';
import ShieldsDropdown from './Shields';
import AmmosDropdown from './Ammos';
import ArmorDropdown from './Armors';
import SorceriesIncantationsDropdown from './Soceries-Incantaions';
import TalismansDropdown from './Talismans';
import AshesDropdown from './Ashes';
import SpiritDropdown from './Spirits';


function ER_webpage() {

    let [value, setValue] = useState('Hero');

    let result = Data.filter(function (el) { return el.name == value })[0]

    return (
        <div>
            <div className="ER_webpage">
                <Row className='header'>
                    <Col md>
                        <h1>Elden Ring Character Builder</h1>
                    </Col>
                    <Col md>
                        <Link to='/Login'><button>login</button></Link>
                        <Link to='/Save-progress'><button>Save</button></Link>
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
                            <FloatingLabel controlId="floatingSelect">
                                <Form.Group as={Col} controlId="dropdownItem">
                                    <Form.Control as="select" value={value} onChange={(e) => setValue(e.target.value)} >
                                        {Data.map(post => {
                                            return <option key={post.id}>{post.name}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            </FloatingLabel>
                        </div>
                    </Col>
                </Row>

                <div className='playerLevel'>
                    <ListGroup horizontal>
                        <ListGroup.Item>Player level</ListGroup.Item>
                        <ListGroup.Item>
                            <NumericInput min={0} max={99} value={result.level} />
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <Runes level={result.level} />

                <div className='attributePoint'>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Label>Attribute Points</Form.Label>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Vigor</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.vigor} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Mind</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.mind} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Endurance</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.endurance} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Strength</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.strength} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Dexterity</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.dexterity} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Intelligence</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.intelligence} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Faith</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.faith} />
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup horizontal>
                                    <ListGroup.Item>Arcane</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NumericInput min={0} max={99} value={result.arcane} />
                                    </ListGroup.Item>
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
                                <Form.Label>Equipment</Form.Label>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Weapons Right Hand</ListGroup.Item>
                                    <ListGroup.Item>Right Hand 1 <WeaponsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Right Hand 2<WeaponsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Right Hand shield<ShieldsDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Weapons left Hand</ListGroup.Item>
                                    <ListGroup.Item>Left Hand 1<WeaponsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Left Hand 2<WeaponsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Left Hand shield<ShieldsDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Ashes Right Hand</ListGroup.Item>
                                    <ListGroup.Item>Ashes Right Hand 1<AshesDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Ashes Right Hand 2<AshesDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Ashes Right Hand 3<AshesDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Ashes Left Hand</ListGroup.Item>
                                    <ListGroup.Item>Ashes Left Hand 1<AshesDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Ashes Left Hand 2<AshesDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Ashes Left Hand 3<AshesDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Arrows</ListGroup.Item>
                                    <ListGroup.Item>Arrow 1<AmmosDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Arrow 2<AmmosDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Bolts</ListGroup.Item>
                                    <ListGroup.Item>Bolt 1<AmmosDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Bolt 2<AmmosDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Talismans</ListGroup.Item>
                                    <ListGroup.Item>Talisman 1<TalismansDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Talisman 2<TalismansDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Talisman 3<TalismansDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Talisman 4<TalismansDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Memory Slots</ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 1<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 2<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 3<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 4<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 5<SorceriesIncantationsDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Memory Slots</ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 6<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 7<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 8<SorceriesIncantationsDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Incantations/Sorceries 9<SorceriesIncantationsDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Armor</ListGroup.Item>
                                    <ListGroup.Item>Head<ArmorDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Chest<ArmorDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Arms<ArmorDropdown /></ListGroup.Item>
                                    <ListGroup.Item>Legs<ArmorDropdown /></ListGroup.Item>
                                </ListGroup>
                                <ListGroup horizontal>
                                    <ListGroup.Item>Spirit</ListGroup.Item>
                                    <ListGroup.Item><SpiritDropdown /></ListGroup.Item>
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
            <div>
            </div>
        </div>
    );
}

export default ER_webpage;