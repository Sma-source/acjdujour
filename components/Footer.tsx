import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-400 px-8 pt-20 pb-32 relative">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Link
                href={"/"}
                className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
              >
                <span>ACJ</span>
              </Link>
            </div>
            <div>Copyright © 2024 ACJ INC</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Pricing
              </Link>
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600  dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Blog
              </Link>
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600  dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Contact
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600  dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600  dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Refund Policy
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Twitter
              </Link>
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600  dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Linkedin
              </Link>
              <Link
                href={"/"}
                className="transition-colors hover:text-black text-neutral-600  dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
