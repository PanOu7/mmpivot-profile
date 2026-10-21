"use client";

import Container from "@/components/Container";
import Image from "next/image";

const TradingHeroSection = () => {
  return (
    <section>
      <Container>
        <div className="min-h-[85vh] ">
          <img src="/images/trading.jpg" alt="" className="w-full h-auto" />
        </div>
      </Container>
    </section>
  );
};

export default TradingHeroSection;
