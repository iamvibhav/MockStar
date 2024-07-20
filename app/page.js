import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { ScanEye, SquarePen, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={"/g.svg"}
        className="absolute top-0 left-0 z-[-10] w-full h-full object-cover"
        layout="fill"
        objectFit="cover"
        alt="Background"
      />
      <Header />
      <section className="z-50 relative">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            Rehearse, Refine & Rise Above
          </h1>
          <p className="mb-8 text-lg font-normal text-slate-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Your AI-Powered Path to Interview Excellence
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="py-8 bg-inherit z-50 relative px-4 mx-auto max-w-screen-xl text-center lg:py-1 lg:px-12">
        <h2 className="font-bold text-3xl text-white">How it Works?</h2>
        <h2 className="text-md text-slate-400">
          Give mock interviews in just 3 simple, easy steps
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <SquarePen className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black ">
              Write prompt for your interview
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Enter your desired job position, tech stack, and years of
              experience. Our AI generates tailored interview questions to match
              your profile, ensuring a realistic and challenging practice
              session
            </p>
          </a>

          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <Video className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Record your responses{" "}
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Open your camera and microphone to answer the generated questions.
              Speak naturally as you would in a real interview. Our
              speech-to-text technology captures your responses for analysis.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <ScanEye className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Review your performance
            </h2>

            <p className="mt-1 text-sm text-gray-600 ">
              After completing all questions, receive a comprehensive report. It
              includes your answers, correct responses, personalized feedback,
              and a performance score. Use these insights to refine your
              interview skills.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center ">
          <a
            href="/sign-in"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
