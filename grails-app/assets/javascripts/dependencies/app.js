import React from 'react';
import ReactDOM from 'react-dom';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {AppBar, IconButton, IconMenu, MenuItem, Divider} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItemDialog from "./dialogs/form_dialog"
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import SocialPerson from 'material-ui/svg-icons/social/person';


var NormalAppBar = React.createClass({
	render: function() {
		return  (  <AppBar
    title="Noodles"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItemDialog primaryText="Sign Up" dialogContent="Sign Up Content" leftIcon={<PersonAdd/>} dialogTitle="Sign Up"/>
      <MenuItemDialog primaryText="Login" dialogContent="Login Content" leftIcon={<SocialPerson/>} dialogTitle="Login"/>
        <Divider />
        <MenuItem primaryText="Help" />
      </IconMenu>
    }/>);
}
});

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
        <NormalAppBar/>
	</MuiThemeProvider>
	, 
	document.getElementById('content'));