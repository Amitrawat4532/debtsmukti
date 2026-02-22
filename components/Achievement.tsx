'use client'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="mt-12.5 flex gap-6 w-full flex-col md:flex-row"
    >
      {/* Debts settled */}
      <div className="rounded-3xl bg-[#F2F5F7] flex flex-col items-center justify-center w-full h-47.5 md:h-64.5 gap-5">
        <div className="flex items-baseline">
          <p className="text-[48px] font-bold">
            {inView ? (
              <CountUp start={0} end={234} duration={5} separator="," suffix="M" />
            ) : (
              "0M"
            )}
          </p>
        </div>
        <p className="text-[18px] text-center">
          Debts successfully <br />
          settled
        </p>
      </div>

      {/* Total debt reduced */}
      <div className="rounded-3xl bg-primary-blue flex flex-col items-center justify-center w-full h-47.5 md:h-64.5 gap-5">
        <p className="text-[48px] font-bold text-white">
          Rs{" "}
          {inView ? (
            <CountUp start={0} end={5} duration={2.5} suffix="M+" />
          ) : (
            "0M+"
          )}
        </p>
        <p className="text-[18px] text-white text-center">
          Total debt reduced for <br />
          clients
        </p>
      </div>

      {/* Client satisfaction */}
      <div className="rounded-3xl bg-[#F2F5F7] flex flex-col items-center justify-center w-full h-47.5 md:h-64.5 gap-5">
        <div className="flex items-start">
          <p className="text-[48px] font-bold">
            {inView ? (
              <CountUp
                start={0}
                end={5}
                duration={2}
                decimals={1}
                decimal="."
              />
            ) : (
              "0.0"
            )}
          </p>
          <svg
            className="mt-6 ml-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_37_392)">
              <path
                d="M23.5497 8.90137C23.3734 8.37675 22.9193 7.99425 22.3726 7.91062L16.0092 6.93825L13.1509 0.849375C12.9072 0.330375 12.3863 0 11.8141 0C11.2414 0 10.7209 0.330375 10.4772 0.849375L7.61856 6.93863L1.25519 7.911C0.708439 7.99463 0.254314 8.37675 0.0784392 8.90175C-0.0974358 9.42675 0.0353142 10.005 0.421939 10.4018L5.06894 15.1669L3.96831 21.9083C3.87756 22.4662 4.11419 23.0273 4.57581 23.3535C5.03706 23.6798 5.64606 23.7128 6.14219 23.439L11.8144 20.3021L17.4867 23.439C17.7106 23.5627 17.9569 23.6235 18.2022 23.6235C18.5007 23.6235 18.7992 23.5328 19.0531 23.3535C19.5147 23.0276 19.7509 22.4666 19.6602 21.9083L18.5596 15.1669L23.2069 10.4018C23.5928 10.005 23.7256 9.42675 23.5497 8.90137Z"
                fill="#0A1519"
              />
            </g>
            <defs>
              <clipPath id="clip0_37_392">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="text-[18px]">Client satisfaction rate</p>
      </div>

      {/* Years of experience */}
      <div className="rounded-3xl bg-[#F2F5F7] flex flex-col items-center justify-center w-full h-47.5 md:h-64.5 gap-5">
        <p className="text-[48px] font-bold">
          {inView ? (
            <CountUp start={0} end={10} duration={2.5} suffix="+ Years" />
          ) : (
            "0+ Years"
          )}
        </p>
        <p className="text-[18px]">Experience in debt relief</p>
      </div>
    </section>
  );
};

export default Achievement;