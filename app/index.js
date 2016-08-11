var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
// var userData = {
//   name: 'Tobias',
//   username:'ThatTobMate',
//   image: 'https://avatars1.githubusercontent.com/u/7782211?v=3&s=460'
// }

// var ProfileImage = React.createClass({
//   render: function () {
//     return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//   }
// });

// var Link = React.createClass({
//   changeUrl: function () {
//     window.location.replace(this.props.href)
//   },

//   render: function () {
//     return (
//       <span 
//         style={{color: 'blue', cursor: 'pointer'}}
//         onClick={this.changeUrl}>
//         {this.props.children}
//       </span>
//     )
//   }
// });

// var ProfileLink = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     )
//   } 
// });

// var ProfileName = React.createClass({
//   render: function () {
//     return (
//       <h1> {this.props.name} </h1>
//     )
//   }
// })

// var Avatar = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <ProfileImage imageUrl={this.props.user.image} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} />
//       </div>
//     )
//   }
// })


ReactDom.render(
  // <Avatar user={userData} />,
  routes,
  document.getElementById('app')
)