import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() myEvent: EventEmitter<String>;

  handleClick = () => {
    this.myEvent.emit('test');
  };

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div onClick={this.handleClick}>Hello, World! I'm {this.getText()}</div>;
  }
}
