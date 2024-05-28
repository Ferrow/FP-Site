"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="py-32 bg-slate-800 font-poppins text-white">
      <div
        id="footer"
        className="h-[calc(100%-80px)] max-w-[1000px] mx-auto px-4 py-8 flex flex-col gap-8 lg:py-0"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center gap-6 text-middle text-sm lg:items-start lg:pt-1 lg:pr-40">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="logo"
                width={200}
                height={200}
                className="w-[150px]"
              />
            </Link>
          </div>
          <div className="flex justify-evenly text-middle text-sm gap-10 lg:justify-around lg:grow">
            <div className="flex flex-col gap-2">
              <h5 className="text-light text-xl pb-4">Stránky</h5>
              <li className="hover:underline hover:underline-offset-4 list-none">
                <a href={pathname === "/" ? "#nase-sluzby-section" : "/"}>
                  Služby
                </a>
              </li>
              <li className="hover:underline hover:underline-offset-4 list-none">
                <a href={pathname === "/" ? "#o-nas-section" : "/"}>O Nás</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 list-none">
                <a href={pathname === "/" ? "#clanky-section" : "/clanky"}>
                  Články
                </a>
              </li>
              <li className="hover:underline hover:underline-offset-4 list-none">
                <a href="/kontakt">Kontakt</a>
              </li>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-light text-xl pb-4">Kontakt</h5>
              info@financnapevnost.sk
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center gap-6 py-8 text-middle text-sm lg:justify-start">
          <p>Follow us</p>
          <Link
            href="https://www.instagram.com/deus_auction/"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition ease-in-out hover:duration-300 hover:scale-125"
            >
              <path
                fill="#737373"
                d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"
              />
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100094733175585"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition ease-in-out hover:duration-300 hover:scale-125"
            >
              <path
                fill="#737373"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
              />
            </svg>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCS9rTYBrO0zhe_pNVh0PlcA"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition ease-in-out hover:duration-300 hover:scale-125"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="#737373"
                  d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954c0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425l-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A61.676 61.676 0 0 1 12 4Zm-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
                />
              </g>
            </svg>
          </Link>
        </div> */}
        {/* <div className="border-t-[1px] border-t-slate-700 flex flex-col items-center justify-center text-white text-xs gap-5 lg:flex-row lg:justify-between lg:pb-8">
          <div>
            <p>&copy;2023 Deus s.r.o. All rights reserved.</p>
            </div>
          <div className="flex gap-6">
            <Link href="/terms">
              <p className="hover:text-middle">Terms & Conditions</p>
            </Link>
            <Link href="/terms">
              <p className="hover:text-middle">Privacy Policy</p>
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
