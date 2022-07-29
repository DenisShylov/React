import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  showColor = (color) => {
    this.setState({
      color,
    });
  };

  removeColor = () => {
    this.setState({
      color: '',
    });
  };
  render() {
    return (
      <div>
        <div class="picker__title">{this.state.color}</div>
        <div>
          <button
            class="picker__button picker__button_coral"
            onMouseOver={() => this.showColor('Coral')}
            onMouseOut={() => this.removeColor()}
          ></button>
          <button
            class="picker__button picker__button_aqua"
            onMouseOver={() => this.showColor('Aqua')}
            onMouseOut={() => this.removeColor()}
          ></button>
          <button
            class="picker__button picker__button_bisque"
            onMouseOver={() => this.showColor('Bisque')}
            onMouseOut={() => this.removeColor()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
