import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container-system" data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
        <div className="container-planet">
          {
            planets.map((planetas) => (<PlanetCard
              key={ planetas.name }
              planetImage={ planetas.image }
              planetName={ planetas.name }
            />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
