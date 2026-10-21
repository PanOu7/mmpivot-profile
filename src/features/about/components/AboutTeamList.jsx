"use client";

import { fetchTeam, teamApiUrl } from "@/services/team";
import useSWR from "swr";
import AboutTeamCard from "./AboutTeamCard";

const AboutTeamList = () => {
  const { data, isLoading } = useSWR(teamApiUrl, fetchTeam);
  if (isLoading) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 mb-12">
      {data.map((el) => (
        <AboutTeamCard key={el._id} team={el} />
      ))}
    </div>
  );
};

export default AboutTeamList;
