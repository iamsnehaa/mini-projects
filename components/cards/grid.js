import { HoverEffect } from "../ui/card-hover-effect";
function CardHoverEffectDemo() {
  try {
    return (
      <div className="flex justify-center items-center mt-4">
        <div className="w-full max-w-screen-lg">
          <HoverEffect items={projects} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
export const projects = [
  {
    title: "Weather App",
    description: "Detects and displays weather information.",
    logo: "/sun.svg",
    link: " https://weather-detect-mu.vercel.app/ ",
  },
  {
    title: "Erith",
    description: "A simple calculator application",
    logo: "/cal.png",
    link: "https://erith.vercel.app/",
  },
  {
    title: "kyuyaar-generator",
    description: "Generates QR codes for provided data.",
    logo: "/qr.png",
    link: "https://kyuyaar-generator.vercel.app/  ",
  },
  {
    title: "Questionnaire",
    description: "A multiple-choice quiz application.",
    logo: "/qa.png",
    link: "https://questionnaire-six.vercel.app/ ",
  },
  {
    title: "kriya",
    description: "A simple to-do list application.",
    logo: "/todo.png",
    link: "https://kriya-cyan.vercel.app/ ",
  },
  {
    title: "Resume-build",
    description: "A tool for building professional resumes.",
    logo: "/cv.png",
    link: "https://resume-build-rust.vercel.app/ ",
  },
];

export default CardHoverEffectDemo;
