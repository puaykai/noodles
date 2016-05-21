import React from 'react';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Dialog, FlatButton, RaisedButton, MenuItem} from 'material-ui';

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
          {this.props.dialogContent}
        </Dialog></div>);
  }
});

var MenuItemDialog = React.createClass({
  getInitialState: function(){return {open:false};},
  handleClose:function(){this.setState({open:false});},
  handleOpen:function(){this.setState({open:true});},
  render: function(){
    return (<div><MenuItem primaryText={this.props.primaryText} onTouchTap={this.handleOpen} leftIcon={this.props.leftIcon}/>
              <Dialog
          title={this.props.dialogTitle}
          modal={true}
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
          {this.props.dialogContent}
        </Dialog></div>);
  }
});



export default RaisedDialogButton;
export default MenuItemDialog;