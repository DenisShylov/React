import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">Some title</span>
          <button className="expand__toggle-btn" onClick={this.onToggle}>
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up "></i>
            ) : (
              <i className="fas fa-chevron-down "></i>
            )}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
export default Expand;
