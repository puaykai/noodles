import React from 'react';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Dialog, FlatButton, RaisedButton} from 'material-ui';

var RaisedDialogButton = React.createClass({
  getInitialState: function(){return {open:false};},
  handleClose:function(){this.setState({open:false});},
  handleOpen:function(){this.setState({open:true});},
  render: function(){
    return (<div><RaisedButton label="Dialog" onTouchTap={this.handleOpen}/>
              <Dialog
          title="Dialog With Actions"
          actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}/>,
    ]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog></div>);
  }
});

var MenuItemDialog = React.createClass({});

export default RaisedDialogButton;