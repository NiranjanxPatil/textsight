import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

export default function HeroSection() {
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption);

    setButtonText("Copied!"); // Set the button text to "Copied!" when text is copied
    setTimeout(() => {
      setButtonText("Copy"); // Set the button text back to "Copy" after 2 seconds
    }, 2000);
  };

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-16 mt-18  ">
      <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-4xl lg:text-6xl">
        Easily generate text for your images
        <span className="relative whitespace-nowrap text-[#757fdf]">
          <span className="relative sm:text-5xl lg:text-7xl"> using AI.</span>
        </span>
      </h1>

      <p className="mx-auto mt-4 md:mt-12 max-w-xl text-lg underline text-white leading-7">
        Take your images to the next level with custom captions.
      </p>
      
      <div className="flex justify-center space-x-4">
        <a
          className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
          href="https://niranjann.tech/projects"
          target="_blank"
          rel="noreferrer"
        >
          Learn how it's built
        </a>
        <Link
          className="bg-[#4b4cb7] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#4b4cb7]/80"
          href="/caption"
        >
          Create a caption
        </Link>
      </div>

      <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6 text-white">
        <div className="flex flex-col space-y-10 mt-4 mb-16">
          <div className="flex sm:space-x-10 sm:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
              <Image
                alt="Dog and blue building"
                src="/example.jpg"
                className="w-96 h-96 rounded-2xl"
                width={400}
                height={400}
              />
            </div>

            <div className="sm:mt-0 mt-8 w-full md:w-1/2">
              <h2 className="mb-1 font-medium text-lg">Generated Caption</h2>
              <textarea
                className="w-full h-32 p-2 text-gray-700 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring"
                placeholder="Enter text here..."
                value="a brown dog standing on top of a blue building"
              />
              <button
                className="px-4 py-2 text-white bg-[#5a5cd1] rounded-md hover:bg-[#3f4194] focus:outline-none focus:ring"
                onClick={() =>
                  copyToClipboard(
                    "a brown dog standing on top of a blue building"
                  )
                }
              >
                <div className="flex flex-row items-center justify-center">
                  <HiOutlineClipboardDocument className="w-5 h-5 mr-1" />
                  {buttonText}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
