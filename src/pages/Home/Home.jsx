import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjOne } from "./Data";
import UserPanel from "../../components/UserPannel/UserPannel";
import { useAuth } from "@frontegg/react";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>{isAuthenticated ? <UserPanel /> : <InfoSection {...homeObjOne} />}</>
  );
};

export default Home;
