import React from 'react';
import UserPanel from '../../components/UserPannel/UserPannel';
import { userPanel } from './Data';

function Dashboard() {
  return (
    <>
      <UserPanel {...userPanel} />
    </>
  );
}

export default Dashboard;
