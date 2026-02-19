import { siteData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="flex justify-between mt-[30px] md:mt-[80px] flex-col-reverse md:flex-row">
        
      <div className="flex flex-col gap-[32px] justify-center max-w-[590px]">
        <h1 className="text-primary-blue text-[28px] font-bold hidden md:block">
          Debt Mukti: Your Path to Stress-Free Debt Freedom
        </h1>
        <p className="text-primary-blue text-[16px] md:text-[22px] text-center md:text-left">
          A trusted service that makes debt negotiation simple, helping you
          resolve your loans without stress, endless paperwork, or uncertainty.
        </p>
        <div className="flex items-center gap-2 flex-col md:flex-row w-full">
          <button className="bg-primary-blue text-white px-8 py-[16px] w-full rounded-full text-[18px]  hover:bg-opacity-90 transition-all">
            Get Free Consultation
          </button>
          <button className="bg-primary-light-blue text-black px-8 py-[16px] w-full rounded-full text-[18px]  hover:bg-opacity-90 transition-all">
            Know More
          </button>
          
        </div>
        <div className=" items-center gap-4 hidden md:flex">
            <Link href={siteData.instagram}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="27.8969"
                  height="27.8969"
                  rx="13.9485"
                  fill="#E3EFFF"
                />
                <path
                  d="M16.6042 7.60742H11.2911C8.98325 7.60742 7.60742 8.98325 7.60742 11.2911V16.5978C7.60742 18.912 8.98325 20.2878 11.2911 20.2878H16.5978C18.9057 20.2878 20.2815 18.912 20.2815 16.6042V11.2911C20.2878 8.98325 18.912 7.60742 16.6042 7.60742ZM13.9476 16.4076C12.5908 16.4076 11.4876 15.3044 11.4876 13.9476C11.4876 12.5908 12.5908 11.4876 13.9476 11.4876C15.3044 11.4876 16.4076 12.5908 16.4076 13.9476C16.4076 15.3044 15.3044 16.4076 13.9476 16.4076ZM17.701 10.7014C17.6693 10.7775 17.6249 10.8473 17.5679 10.9107C17.5045 10.9677 17.4347 11.0121 17.3587 11.0438C17.2826 11.0755 17.2002 11.0945 17.1177 11.0945C16.9465 11.0945 16.788 11.0311 16.6676 10.9107C16.6105 10.8473 16.5661 10.7775 16.5344 10.7014C16.5027 10.6254 16.4837 10.5429 16.4837 10.4605C16.4837 10.3781 16.5027 10.2957 16.5344 10.2196C16.5661 10.1372 16.6105 10.0738 16.6676 10.0104C16.8134 9.86454 17.0353 9.79479 17.2382 9.83917C17.2826 9.84551 17.3206 9.8582 17.3587 9.87722C17.3967 9.8899 17.4347 9.90892 17.4728 9.93428C17.5045 9.9533 17.5362 9.985 17.5679 10.0104C17.6249 10.0738 17.6693 10.1372 17.701 10.2196C17.7327 10.2957 17.7518 10.3781 17.7518 10.4605C17.7518 10.5429 17.7327 10.6254 17.701 10.7014Z"
                  fill="#0F2A47"
                />
              </svg>
            </Link>

            <Link href={siteData.facebook}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="27.8969"
                  height="27.8969"
                  rx="13.9485"
                  fill="#E3EFFF"
                />
                <path
                  d="M17.7525 7.60742H15.8505C15.0097 7.60742 14.2034 7.94141 13.6089 8.53592C13.0144 9.13043 12.6804 9.93676 12.6804 10.7775V12.6796H10.7783V15.2157H12.6804V20.2878H15.2165V15.2157H17.1185L17.7525 12.6796H15.2165V10.7775C15.2165 10.6094 15.2833 10.4481 15.4022 10.3292C15.5211 10.2103 15.6823 10.1435 15.8505 10.1435H17.7525V7.60742Z"
                  fill="#0F2A47"
                />
              </svg>
            </Link>

            <Link href={siteData.twitter}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="27.8969"
                  height="27.8969"
                  rx="13.9485"
                  fill="#E3EFFF"
                />
                <path
                  d="M20.9221 8.24173C20.3149 8.66999 19.6427 8.99755 18.9313 9.21178C18.5494 8.77273 18.0419 8.46154 17.4775 8.3203C16.913 8.17906 16.3188 8.21459 15.7752 8.42208C15.2315 8.62956 14.7648 8.999 14.4379 9.48042C14.1111 9.96185 13.9401 10.532 13.9479 11.1138V11.7479C12.8337 11.7768 11.7296 11.5296 10.734 11.0285C9.73843 10.5274 8.88224 9.78787 8.24167 8.87575C8.24167 8.87575 5.70559 14.5819 11.4118 17.118C10.106 18.0044 8.55054 18.4488 6.97363 18.3861C12.6798 21.5562 19.654 18.3861 19.654 11.0948C19.6535 10.9182 19.6365 10.742 19.6033 10.5686C20.2504 9.93044 20.707 9.12474 20.9221 8.24173Z"
                  fill="#0F2A47"
                />
              </svg>
            </Link>
            <Link href={siteData.linkedin}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="27.8969"
                  height="27.8969"
                  rx="13.9485"
                  fill="#E3EFFF"
                />
                <path
                  d="M16.4838 11.4121C17.4927 11.4121 18.4603 11.8129 19.1737 12.5263C19.8871 13.2397 20.2879 14.2073 20.2879 15.2162V19.6544H17.7519V15.2162C17.7519 14.8799 17.6183 14.5574 17.3805 14.3196C17.1426 14.0818 16.8201 13.9482 16.4838 13.9482C16.1475 13.9482 15.825 14.0818 15.5872 14.3196C15.3494 14.5574 15.2158 14.8799 15.2158 15.2162V19.6544H12.6797V15.2162C12.6797 14.2073 13.0805 13.2397 13.7939 12.5263C14.5073 11.8129 15.4749 11.4121 16.4838 11.4121Z"
                  fill="#0F2A47"
                />
                <path
                  d="M10.1435 12.0459H7.60742V19.6541H10.1435V12.0459Z"
                  fill="#0F2A47"
                />
                <path
                  d="M8.87546 10.1435C9.57578 10.1435 10.1435 9.57578 10.1435 8.87546C10.1435 8.17514 9.57578 7.60742 8.87546 7.60742C8.17514 7.60742 7.60742 8.17514 7.60742 8.87546C7.60742 9.57578 8.17514 10.1435 8.87546 10.1435Z"
                  fill="#0F2A47"
                />
              </svg>
            </Link>
          </div>
      </div>
      
      <div className="bg-primary-blue rounded-[20px] py-[13px] px-5 my-[30px] md:my-0">
        <Image src="/banner-img.png" alt="banner img" width={510} height={500} />
      </div>
      <h1 className="text-black text-[24px] text-center font-bold md:hidden">
          Debt Mukti: Your Path to Stress-Free Debt Freedom
        </h1>
    </section>
  );
};

export default Banner;
