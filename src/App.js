import React, { Component } from 'react';
import ShapeCard from "./components/ShapeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import shapes from "./shapes.json";
import './App.css';

class App extends Component {

  state = {
    shapes
  };

  moveShape = id => {
    // Filter this.state.shapes for shape with an id not equal to the id being clicked
    const shapes = this.state.shapess.filter(shape => shape.id !== id);
    // Set this.state.shapes equal to the new shapes array
    this.setState({ shapes });
  };

  // Map over this.state.shapes and render a ShapeCard component for each shape object
  render() {
    return (
      <Wrapper>
        <Title>Shapes</Title>
        {this.state.shapes.map(shape => (
          <ShapeCard
            moveShape={this.moveShape}
            id={shape.id}
            key={shape.id}
            name={shape.name}
            image={shape.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
