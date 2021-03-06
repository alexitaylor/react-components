// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onGroceryItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      <li style={style} onClick={this.onGroceryItemClick.bind(this)}>{this.props.grocery}</li>
    );

  }

}

// Update our `GroceryList` to use the new `GroceryListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceries={['Cupcakes', 'Beer', 'Mangos']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));


