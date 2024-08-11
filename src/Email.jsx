import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Email() {
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [email, setEmail] = useState("");
  function handleSubmitEmail(event) {
    event.preventDefault();

    if (email === "") {
      setIsEmailEmpty(true);
    }

    if (emailRegex.test(email) === false) {
      setIsEmailInvalid(true);
    }
  }

  const errorStyle =
    isEmailEmpty || isEmailInvalid
      ? "border-soft-red border-2"
      : "border-desaturated-red";

  return (
    <form className="relative" onSubmit={handleSubmitEmail}>
      <input
        type="text"
        placeholder="Email Address"
        maxLength={20}
        className={`w-full rounded-[28px] border-[1px] border-opacity-50 pb-[10px] pl-6 pt-3 placeholder:text-sm placeholder:leading-7 placeholder:text-desaturated-red placeholder:opacity-50 focus:text-dark-grayish-red focus:outline-none ${errorStyle} bg-background lg:pb-[13px] lg:pt-[15px] lg:placeholder:text-base`}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onFocus={() => {
          setEmail("");
          setIsEmailEmpty(false);
          setIsEmailInvalid(false);
        }}
      />

      {/* error icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className={`absolute right-[72px] top-[13px] lg:right-[116px] lg:top-4 ${isEmailEmpty || isEmailInvalid ? "visible" : "invisible"}`}
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="12" cy="12" r="12" fill="#F96464" />
          <path
            fill="#FFF"
            fill-rule="nonzero"
            d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
          />
        </g>
      </svg>

      {/* error text */}
      <p
        className={`${isEmailEmpty || isEmailInvalid ? "visible" : "invisible"} ml-6 mt-2 text-left text-[13px] leading-none text-soft-red lg:leading-7`}
      >
        {isEmailEmpty
          ? "Please enter email."
          : isEmailInvalid
            ? "Please provide a valid email."
            : ""}
      </p>

      {/* submit button */}
      <button
        type="submit"
        className="absolute right-0 top-0 z-10 flex h-12 w-16 items-center justify-center rounded-[28px] bg-button hover:opacity-50 hover:shadow-button lg:h-14 lg:w-[100px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="M1 1l8.836 8.836L1 18.671"
          />
        </svg>
      </button>
    </form>
  );
}
export default Email;
