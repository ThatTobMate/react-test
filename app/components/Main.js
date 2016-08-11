var React = require('react');
var Navbar = require('react-materialize').Navbar;
var NavItem = require('react-materialize').NavItem;

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar brand='logo' right>
          <NavItem href='#/playerOne'>Player One</NavItem>
          <NavItem href='#/'>Home</NavItem>
        </Navbar>

        <div className='main-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;