import React, { Component } from 'react';
import ShapeCard from "./components/ShapeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import shapes from "./shapes.json";
import './App.css';
import Nav from "./components/Nav";
class App extends Component {

  state = {
    shapes
  };
   shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
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
        <Nav>
          <Title>SHAPE CLICKER</Title>
          </Nav>
        {this.state.shapes.map(shape => (
          <ShapeCard
            shuffle={this.shuffle}
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
