import SimpleCenteredWithBackgroundImage from "./components/SimpleCenteredWithBackgroundImage";
import SimpledCentered from "./components/SimpledCentered";
import SplitWithCodeExample from "./components/SplitWithCodeExample";
import SplitWithImage from "./components/SplitWithImage";
import SplitWithScreenshot from "./components/SplitWithScreenshot";
import SplitWithScreenshotOnDark from "./components/SplitWithScreenshotOnDark";
import WithAngledImageOnRight from "./components/WithAngledImageOnRight";
import WithAppScreenshot from "./components/WithAppScreenshot";
import WithAppScreenshotOnDark from "./components/WithAppScreenshotOnDark";
import WithImageTiles from "./components/WithImageTiles";
import WithOffsetImage from "./components/WithOffsetImage";
import WithPhoneMockup from "./components/WithPhoneMockup";

const Hero = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto ">
      {/* PAGE TITLE */}
      <div className="">
        <p className="text-slate-500 text-base font-medium">
          Marketing / Page Sections
        </p>
        <h1 className="text-black font-extrabold font-inter text-3xl leading-relaxed">
          Hero Sections
        </h1>
      </div>
      <div className="">
        <SimpledCentered />
        <SplitWithScreenshotOnDark />
        <SplitWithScreenshot />
        <SplitWithCodeExample />
        <SimpleCenteredWithBackgroundImage />
        <WithAppScreenshot />
        <WithAppScreenshotOnDark />
        <WithPhoneMockup />
        <SplitWithImage />
        <WithAngledImageOnRight />
        <WithImageTiles />
        <WithOffsetImage />
      </div>
    </div>
  );
};

export default Hero;
