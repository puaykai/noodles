var $ = require('jquery');
console.log($('#content').val());
var button = $('<button/>').html('click me').on('click', function(){
  alert('hi');
});
$('body').append(button);

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// var React = require('react');
// var ReactDOM = require('react-dom');
// var getMuiTheme = require('material-ui/styles/getMuiTheme');
// var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
// var RaisedButton = require('material-ui/RaisedButton');

// const MyAwesomeReactComponent = () => (
//   <RaisedButton label="Default" />
// );

// const App = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme()}>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById('content')
// );
ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
	<RaisedButton label="Default" />
	</MuiThemeProvider>
	, 
	document.getElementById('content'));