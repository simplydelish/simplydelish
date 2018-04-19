import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const noShadow = {border: "none", boxShadow: "none"};
    const itemStyle = { color: "white", fontSize: "22px", letterSpacing: "2px",
      fontWeight: "550"};
    return (
        <Menu className=" fixed borderless topmenu" style={noShadow}>
          <Menu.Item style={itemStyle} position="right">LOGIN</Menu.Item>
        </Menu>
    );
  }
}