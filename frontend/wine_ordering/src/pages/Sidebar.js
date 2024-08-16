import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
//   CDBSidebarFooter,
} from 'cdbreact';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Pune Restaurant
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to='/addproduct'><CDBSidebarMenuItem icon="plus">Add Product</CDBSidebarMenuItem></Link>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="shopping-cart">Orders</CDBSidebarMenuItem>
            <Link to='/inventory'><CDBSidebarMenuItem icon="box">Inventory</CDBSidebarMenuItem></Link>
            <CDBSidebarMenuItem icon="shipping-fast">Track Orders</CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="money-bill-wave">Payments</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="envelope">Messages</CDBSidebarMenuItem>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
  );
};

export default Sidebar;