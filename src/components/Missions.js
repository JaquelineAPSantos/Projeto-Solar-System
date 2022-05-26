import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';

import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <div>
          <Title headline="Missões" />
        </div>
        <div className="container-missions">
          {
            missions.map((element, index) => (<MissionCard
              key={ index }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />))
          }
        </div>
      </div>
    );
  }
}
export default Missions;
