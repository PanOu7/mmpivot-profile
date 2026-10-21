"use client";

import Container from "@/components/Container";
import AboutTeamList from "./AboutTeamList";

const AboutMemberSection = () => {
  return (
    <section className=" bg-blue-50 py-16">
      <Container>
        <div className=" h-full flex flex-col items-center">
          <h3 className=" text-blue-600 text-2xl font-bold mb-2 font-heading">
            Team Members
          </h3>

          <p className=" w-full lg:w-1/2 text-center mb-12 px-5 text-sm lg:text-base">
            ပိုမိုကောင်းမွန် မြန်ဆန်သော ဝန်ဆောင်မှုများကို
            အချိန်နှင့်တစ်ပြေးညီဝန်ဆောင်မူ့ပေးနိုင်ရန် အစဉ်အမြဲကြိုးစား
            လျှက်ရှိသော Myanma Pivot မှအဖွဲ့ ဝင်များ
          </p>
          <AboutTeamList />

          <p className=" w-full lg:w-1/2 text-center mb-10 my-3 px-5 text-sm lg:text-base">
            Customers များအတွက် မြန်၊ ကောင်း၊ သက်သာတဲ့ ဝန်ဆောင်မှု့များကို
            ပေးဖို့ အဆင်အမြဲကြိုးစားနေခြင်းကြောင့်ရွေးချယ်စရာတစ်ခုဖြစ်မှာပါ။
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutMemberSection;
