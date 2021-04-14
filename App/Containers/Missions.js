import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mission from '../Components/Missions';
import { getMissions } from '../Redux/actions/missions.actions';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  InputGroupAddon,
  InputGroup,
  FormGroup,
  Input
} from 'reactstrap';
//import 'toasted-notes/src/styles.css';

class Missions extends Component {
  state = {
    missions: [],
    search: '',
    type: ''
  };

  componentDidMount() {
    this.props.getMissions();
  }



  handleArchivedMissionsButton = () => {
    this.props.history.push('/missions/archived');
  };
  handleAddRedirect = () => {
    this.props.history.push('/missions/add');
  };

  handleInputChange = mission => {
    this.setState({
      [mission.target.name]: mission.target.value
    });
  };

  render() {
    const { mission } = this.props.mission;

    let allMissions = mission.filter(mission => {
      return mission.archived === false;
    });

    if (this.state.search !== '') {
      allMissions = allMissions.filter(mission => {
        return mission.title.indexOf(this.state.search) !== -1;
      });
    }
    if (this.state.type !== '') {
      allMissions = allMissions.filter(mission => {
        return mission.type.indexOf(this.state.type) !== -1;
      });
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <InputGroupAddon addonType="prepend">
                          <Button  type="button" color="primary">
                            Recherche:
                          </Button>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="input1-group2"
                          value={this.state.search}
                          name="search"
                          placeholder="Inserer un titre"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </Col>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <InputGroupAddon addonType="prepend">
                          <Button  type="button" color="primary">
                            Type:
                          </Button>
                        </InputGroupAddon>
                        <Input
                          type="select"
                          value={this.state.type}
                          name="type"
                          placeholder="Inserer un titre"
                          onChange={this.handleInputChange}
                        >
                          <option value="">veuillez choisir le type</option>
                          <option value="sportif">Sportif</option>
                          <option value="autres">Autres</option>
                        </Input>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row >
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block onClick={this.handleAddRedirect} color="success" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un Evenement
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button onClick={this.handleArchivedMissionsButton} block color="danger" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Evenements Archiveés
                        </Button>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardHeader>
              <CardBody>
                <Row>
                  {this.props.loading
                    ? 'Loading...'
                    : allMissions.map((mission, index) => <Mission key={index} mission={mission} />)}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Missions)
