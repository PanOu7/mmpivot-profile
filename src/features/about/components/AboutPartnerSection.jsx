"use client";

import Container from "@/components/Container";
import AboutPartnersCard from "./AboutPartnerCard";
import AboutPartnerList from "./AboutPartnerList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPartnerSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className=" h-full flex flex-col items-center">
          <h3 className=" text-blue-600 text-2xl font-bold mb-3">
            Our Partners
          </h3>
          <p className=" text-center text-sm lg:text-base px-5">
            ယုံကြည်စိတ်ချစွာနဲ့ အတူလက်တွဲ လုပ်ကိုင်လျှက်ရှိသော
            <br />
            partners လုပ်ငန်းအချို့
          </p>
        </div>

        <div className="mt-8">
          <AboutPartnerList />
        </div>

        <div className="text-center mt-8">
          <Link href={`/our-partners`}>
            <Button variant={`outline`}>See All Partners</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AboutPartnerSection;
