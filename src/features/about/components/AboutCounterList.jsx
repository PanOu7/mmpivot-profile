"use state"
import { counterApiUrl, fetchCounter } from "@/services/counter";
import useSWR from "swr";
import AboutCounterCard from "./AboutCounterCard";
const AboutCounterList = () => {
  const { data, isLoading } = useSWR(counterApiUrl, fetchCounter);

  if(isLoading){
    return <></>
  }


  return (
    <div className=" grid gap-5 grid-cols-2 lg:grid-cols-4">
        {data.map(el => <AboutCounterCard counter={el} key={el._id} />)}
    </div>
  )
}

export default AboutCounterList