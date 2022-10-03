import * as React from 'react';
import '../../style.css';

export default class Button extends React.Component {
  _handleClick() {
    let text = this.props.text,
        cb = this.props.clickHandler;
    
    if (cb) {
      cb.call(null, text);
    }
  }
  
  render() {
    return (
      <button className={this.props.klass} onClick={this._handleClick}>
        <span className="title">{this.props.text}</span>
      </button>
    );
  }
}
