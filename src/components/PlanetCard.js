import React from 'react';

import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <p className="name-planet" data-testid="planet-name">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.isRequired;

export default PlanetCard;
