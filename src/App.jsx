import Email from "./Email";
import logo from "./images/logo.svg";

function App() {
  return (
    <main>
      {/* logo */}
      <div className="z-10 p-8 lg:absolute lg:left-[165px] lg:top-[74px] lg:p-0">
        <h1 className="max-w-[100px] lg:max-w-[158px]">
          <img src={logo} alt="logo" className="w-full" />
        </h1>
      </div>

      {/* background pattern */}
      <div className="absolute left-0 top-0 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="830" height="800">
          <defs>
            <linearGradient
              id="a"
              x1="95.861%"
              x2="10.913%"
              y1="2.476%"
              y2="101.718%"
            >
              <stop offset="0%" stop-color="#FFF1F1" />
              <stop offset="100%" stop-color="#FFF" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="95.937%"
              x2="10.848%"
              y1="2.476%"
              y2="101.718%"
            >
              <stop offset="0%" stop-color="#FFF1F1" />
              <stop offset="100%" stop-color="#FFF" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <path
              fill="url(#a)"
              d="M0 800c48.557-184.991 167.048-301.57 355.473-349.737C543.898 402.096 688.074 252.008 788 0v800H0z"
              transform="rotate(180 394 400)"
            />
            <path
              fill="url(#b)"
              d="M413 800c25.696-97.814 88.4-159.455 188.112-184.924C700.824 589.608 777.12 510.25 830 377v423H413z"
            />
          </g>
        </svg>
      </div>

      <div className="-z-20 flex flex-col items-center gap-16 bg-background lg:flex-row-reverse">
        {/* hero */}
        <div className="z-10 min-h-[250px] w-full bg-hero-mobile bg-cover bg-no-repeat lg:h-[800px] lg:max-w-[610px] lg:bg-hero-desktop"></div>
        {/* main content */}
        <div className="z-10 px-8 pb-[92px] text-center text-desaturated-red lg:mx-auto lg:max-w-[445px] lg:text-left xl:p-0">
          <h2 className="mb-4 text-[40px] font-light leading-[42px] tracking-[10.825px] lg:mb-8 lg:text-[64px] lg:leading-[64px] lg:tracking-[17.321px]">
            WE'RE{" "}
            <span className="font-semibold text-dark-grayish-red">
              COMING SOON
            </span>
          </h2>

          <p className="mb-8 text-sm leading-[22px] lg:mb-10 lg:text-base lg:leading-7">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <Email />
        </div>
      </div>
    </main>
  );
}
export default App;
