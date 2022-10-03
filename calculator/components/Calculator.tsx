import * as React from 'react';
import '../../style.css';
import Editor from './Editor';
import { Equations } from './Equations';
import Numbers from './Numbers';
import { Operators } from './Operators';
import { Presets } from './Presets';

export default class Calculator extends React.Component {
  render() {
    return (
      <main className="sk-calculator">
        <Editor />
        <Numbers />
        <Operators />
        <Equations />
        <Presets />
      </main>
    );
  }
}
