import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Col, CardHeader, Card, CardBody, CardImg, Badge } from 'reactstrap';
import moment from 'moment';
import { deleteMission, archiveMission, unarchiveMission } from '../Redux/actions/missions.actions';

class Mission extends Component {
  handleDetailsButton = id => {
    this.props.history.push('/missions/details/' + id);
  };
  handleDeleteButton = id => {
    this.props.deleteMission(id);
  };
  handleEditButton = id => {
    this.props.history.push('/missions/update/' + id);
  };

  handleChange = (archived, id) => {
    if (archived) this.props.unarchiveMission(id);
    else this.props.archiveMission(id);
  };

  render() {
    const { mission } = this.props;
    const deleteButton = (
      <Button onClick={() => this.handleDeleteButton(mission._id)} block color="danger">
        Supprimer
      </Button>
    );
    return (
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>{mission.title}</b>
            <Badge color={'warning'} className={'ml-1 mr-1'}>
              {mission.type}
            </Badge>
            <div className="card-header-actions">
              <Button
                className={'float-right'}
                color={!mission.archived ? 'success' : 'danger'}
                size={'sm'}
                onClick={() => this.handleChange(mission.archived, mission._id)}
              >
                {!mission.archived ? 'Archive' : 'Unarchive'}
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Du <b>{moment(mission.dateStart).format('YYYY-MM-DD')}</b> jusqu'à{' '}
              <b>{moment(mission.dateEnd).format('YYYY-MM-DD')}</b>{' '}
            </p>
            <hr className="my-2" />
            <CardImg src={`http://localhost:4000/${mission.image}`} alt={mission.image} />
            <hr className="my-2" />
            <Button onClick={() => this.handleDetailsButton(mission._id)} block color="primary">
              Details
            </Button>
            <Button onClick={() => this.handleEditButton(mission._id)} block color="warning">
              Modifier
            </Button>
            {!mission.archived ? '' : deleteButton}
          </CardBody>
        </Card>
      </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mission)
