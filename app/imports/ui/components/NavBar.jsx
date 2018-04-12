import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';

class NavBar extends React.Component {

  render() {
    const menuStyle = { backgroundColor: '#f7941d', boxShadow: 'none' };
    const imageStyle = { width: '100%', height: 'auto', maxWidth: '293px',
                        maxHeight: '79px', marginTop: '6px' };
    const padding = { padding: '1em' };
    const linkStyle = { color: '#fffcd9', fontSize: '20px' };

    return (
      <Menu style={menuStyle} attached="top" borderless>
        <Image className={'ui image item'} src={'https://image.ibb.co/mDnbEx/mini2.png'} style={imageStyle} />
        <div className={'right menu'} style={padding}>
          {this.props.links.map((link) =>
              <a key={link.title} href={link.href} style={linkStyle} className={'item'}>{link.title}</a>)}
        </div>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  links: PropTypes.array,
};

export default NavBar;
