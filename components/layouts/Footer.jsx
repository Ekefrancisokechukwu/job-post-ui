import Link from "next/link";
import { popins } from "../fonts";
import { LogoIcon } from "../icons";
import { Heading } from "../ui";

export const Footer = () => {
  return (
    <footer className={`px-[4rem] py-[2rem] border-y  ${popins.className} `}>
      <div className="flex items-center gap-x-5">
        <LogoIcon />
        <button
          className={`text-[#003788] transition-all duration-500 hover:scale-105 active:shadow-md p-[7px_15px] text-[.7rem] shadow-[0px_4px_4px_0px_#00000040] rounded-lg bg-[#E0EBF9] font-medium ${popins.className}`}
        >
          Follow
        </button>
      </div>

      <div className="mt-6 flex items-start gap-x-[9rem]">
        <div>
          <Heading text={"Company size"} />
          <p className="text-[#3D3D3D] mt-2">1k - 2k Employees</p>
          <div className="mt-5">
            <Heading text={"Sector"} />
            <p className="text-[#3D3D3D] mt-2">1k - 2k Employees</p>
          </div>
          <div className="mt-5">
            <Heading text={"Founded In"} />
            <p className="text-[#3D3D3D] mt-2">2019</p>
          </div>
        </div>

        <div>
          <Heading text={"Type"} />
          <p className="text-[#3D3D3D] mt-2">Private</p>
          <div className="mt-5">
            <Heading text={"Funding"} />
            <p className="text-[#3D3D3D] mt-2">Bootstrapped</p>
          </div>
          <div className="mt-5">
            <Heading text={"Founded By"} />
            <div className="mt-2">
              <Link
                target="_blank"
                href={
                  "https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw"
                }
                className="text-[#3D3D3D] py-1 hover:bg-blue-100 transition duration-500"
              >
                Scott Farquhar,
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA"
                }
                className="text-[#3D3D3D] py-1 hover:bg-blue-100 transition duration-500"
              >
                Mike Cannon-Brookes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
