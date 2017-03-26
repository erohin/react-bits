/**
 * Mutating State without setState()
 *
 * - Causes state changes without making component re-render
 * - Whenever setState gets called in future, the mutated state gets applied.
 *
 * @Reference:
 * React Design Patterns and best practices by Michele Bertoli
 */

// BAD
class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // BAD: We mutate state here
    this.state.items.push('lorem');

    this.setState({
      items: this.state.items
    });
  }

  render() {
    return (
      <div>
        {this.state.items.length}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

// GOOD
class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // We update using setState() - concat return new array after appending new item.
    this.setState({
      items: this.state.items.concat('lorem')
    });
  }

  render() {
    return (
      <div>
        {this.state.items.length}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}