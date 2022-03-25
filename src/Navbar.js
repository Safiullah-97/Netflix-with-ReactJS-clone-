import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './App.css';
import Nflogo from './img/Nflogo.png'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class LeftMenu extends Component 

{
  render() {
    
    return (

      <div>
          <div>

</div>
  
  <div>
  <div className='nav'>

    <img className='logo' src={Nflogo} alt='crs'></img>
   
   
    <button type="button" class="btn-btn-danger">Sign In</button>
   
          </div>
         
      </div>
      </div>
    );
  }
}
export default LeftMenu;