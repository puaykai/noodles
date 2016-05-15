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

var MenuItemFormDialog = React.createClass({
  render: function(){
    return (
        <MenuItem 
        primaryText={this.props.primaryText}
        leftIcon={this.props.leftIcon}
        dialogTitle={this.props.dialogTitle}
        dialogContent={
          <form action={this.props.formAction}>
            {this.props.formContent} //submit button must link to the one in menu, afer submit the buttons should change to loading, include a function to be run after server reply
          </form>
        }/>
      );
  }
});


export default RaisedDialogButton;
export default MenuItemDialog;