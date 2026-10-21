"use client";

import Container from "@/components/Container";

const GeneralServiceHeroSection = () => {
  return (
    <section className="mb-0 lg:mb-8">
      <Container>
        {/* General Services Header Card */}
        <div className="mb-6">
          <div className="border border-gray-200">
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 ">
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                General Services
              </h3>
            </div>
            <div className=" border p-8 h-full">
              <ul className="text-sm lg:text-base list-disc">
                <li>
                  Logistics & Freight Forwarding Services (Oversea, Border and
                  Air)
                </li>
                <li>Custom Clearance</li>
                <li>Cargo and Other Insurance Purchasing</li>
                <li>
                  Audit & Related Services (Including (PCA) Post Clearance
                  Audit)
                </li>
                <li>Law Consultant (For Local & Foreign Companies)</li>
                <li className="">ACCOUNTING & TAXATION</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Smaller Service Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logistics & Freight Forwarding */}

            <div className="border p-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Logistics & Freight Forwarding Services (Oversea, Border and
                Air)
              </h3>
              <ul className="text-sm lg:text-base list-disc">
                <li>
                  Importing goods from around the world including Thailand and
                  China border.
                </li>
                <li>Exporting Products from Myanmar to the World.</li>
                <li>Transit Trade Services</li>
                <li>Re-export services</li>
              </ul>
            </div>

            {/* Custom Clearance */}
            <div className="border p-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Custom Clearance
              </h3>
              <ul className="text-sm lg:text-base list-disc">
                <li>
                  Providing efficient low cost and effective custom clearance
                  services for import and export.
                </li>
              </ul>
            </div>

            {/* Cargo Insurance */}
            <div className="border p-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Cargo and Other Insurance Purchasing
              </h3>
              <ul className="text-sm lg:text-base list-disc">
                <li>
                  Providing insurance for departmental needs and protecting
                  damage from purchase import, export.
                </li>
              </ul>
            </div>

            {/* Law Consultant */}
            <div className="border p-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Law Consultant (For Local & Foreign Companies)
              </h3>
              <ul className="text-sm lg:text-base list-disc">
                <li>Contract Making</li>
                <li>Company Formation</li>
                <li>MIC Permits Approval</li>
                <li> Copyright Registration</li>
                <li>Other general investment advisory services</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Larger Service Cards */}
          <div className="lg:col-span-8 space-y-6">
            {/* Audit & Related Services */}
            <div className="border p-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Audit & Related Services (Including (PCA) Post Clearance Audit)
              </h3>
              <ul className="text-sm lg:text-base list-disc">
                <li>
                  Annual Statement of accounts, tax review (or) refund payment
                </li>
                <li>
                  <div>
                    Collect the documents from your office to make the annual
                    statement of account, collecting and giving advice for what
                    need.
                    <br />
                    <span className="font-semibold">
                      [Remark: Monthly Service]
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    Making correction, collection and keep list that require for
                    P.C.A.
                    <br />
                    <span className="font-semibold">
                      [Remark: Monthly Service]
                    </span>
                  </div>
                </li>
                <li>
                  {" "}
                  <div>
                    Help you keep your original business' document and its copy.
                    <br />
                    <span className="font-semibold">
                      [Including for soft Copy and Hard Copy]
                    </span>
                  </div>
                </li>
                <li>
                  {" "}
                  Customer have to pay for Monthly enrollment tax which charge
                  on amount of business.
                </li>
                <li>
                  For monthly tax enrollment (Manual and Supporting Software)
                  charges depend on the amount of business.
                </li>
                <li>
                  If the IDs are added to the tax filings, the customer will
                  have to re-pay the registration fees depending on the number
                  of IDs.
                </li>
                <li> The charges is exclusive for office document services.</li>
                <li>
                  <div>
                    For monthly SSB and the employee income tax services.
                    <br />
                    <span className="font-semibold">
                      [Remark: the charge depend on the number of employee]
                    </span>
                  </div>
                </li>
                <li> Custom Clearance services.</li>
                <li>Applying import and export license services.</li>
              </ul>
            </div>

            {/* Accounting & Taxation */}
            <div className="border p-8">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                ACCOUNTING & TAXATION
              </h3>
              <ul className="text-sm lg:text-base list-disc">
                <li>
                  Annual Statement of accounts, tax review (or) refund payment
                </li>
                <li>
                  {" "}
                  လုပ်ငန်း‌ Nature အလိုက်
                  စာရင်းထားရှိရမည့်ပုံစံများပြင်ဆင်ပေးခြင်း။
                </li>
                <li>
                  အရောင်း/အ၀ယ်/အသုံးစရိတ် Voucher များအား (၁)လတစ်ကြိမ်
                  ဓါတ်ပုံရိုက်ယူပြီး Hard Disk တွင်သိမ်းဆည်းပေးခြင်း။
                </li>
                <li>
                  Warehouse စာရင်းလက်ကျန်များနှင့် စာရွက်စာတမ်းများအရ
                  တိုက်စစ်ဆေးပြီး လိုအပ်သည်များအကြောင်းကြားပေးခြင်း။
                </li>
                <li>
                  (၃) လပတ် အခွန်ကြေညာလွှာတင်ရန်အတွက်
                  စာရင်းများပြင်ဆင်ရေးဆွဲပေးခြင်း။
                </li>
                <li>
                  (၃) လတစ်ကြိမ် (၃) လပတ်အခွန်ကြေညာလွှာများအား
                  အခွန်ရုံးတွင်တင်ပေးခြင်း။
                </li>
                <li>
                  ကြိုတင်၀င်ငွေခွန်၊ ကုန်သွယ်လုပ်ငန်းခွန်များ
                  ဘဏ်သို့ပေးဆောင်ပေးခြင်း။
                </li>
                <li>
                  အခွန်စာရင်းများနှင့်ပတ်သက်ပြီး အခွန်ရုံးမှမေးမြန်းသည်များအား
                  ဖြေကြားပေးခြင်း။
                </li>
                <li>
                  လစဉ်ပြင်ဆင်ရေးဆွဲထားသည့် စာရင်းများအား နှစ်ကုန်လျှင်(၁)နှစ်စာ
                  နှစ်ချုပ်အခွန်စာရင်းရေး ဆွဲပေးခြင်း။
                </li>
                <li> အခွန်ရုံးသို့တင်ပေးခြင်း။</li>
                <li>
                  တင်ထားသောစာရင်းများအား အခွန်ရုံးတွင် လိုက်လံရှင်းပြပေးခြင်း။
                </li>
                <li> ၀င(၈)/SAS-1 (Demand)ထုတ်ပေးခြင်း။</li>
                <li>
                  {" "}
                  (၁) နှစ်စာကျသင့်အခွန် (၀င်ငွေခွန်၊ ကုန်သွယ်လုပ်ငန်းခွန်)
                  များအား ဘဏ်သို့ပေးဆောင်ပေးခြင်း။ပြန်အမ်း‌ငွေ (Refund)
                  ထုတ်ပေးခြင်း။
                </li>
                <li> အပြစ်းသတ်ပြန်လည်စည်းကြပ်မှစာရင်းများ ရေးဆွဲပေးခြင်း။</li>
                <li>
                  တစ်နှစ်တစ်ကြိမ် သက်တမ်းကုန်သော ပတခ(ကသခ)-၂
                  အားသက်တမ်းတိုးပေးခြင်း။
                </li>
                <li>အခွန်အယူခံကိစ္စများ လိုအပ်ပါက အကြံပေးခြင်း။</li>
                <li>
                  ကုမ္ပဏီဖျက်သိမ်းခြင်းဆိုင်ရာကိစ္စများ ဆောင်ရွက်ပေးခြင်း။
                </li>
                <li>PCA စာရင်းအရ လိုအပ်သည်များကို ပြင်ဆင်ပေးခြင်း။</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GeneralServiceHeroSection;
