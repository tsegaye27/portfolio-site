import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container ">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss I can help you achieve your goals.
              </p>
            </div>
            <div>
              <Link
                href="mailto:ttalegn29@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl w-max gap-2 border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
