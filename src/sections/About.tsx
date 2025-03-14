import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

export const AboutSection = () => {
  const toolboxItems = [
    {
      title: "JavaScript",
      iconType: JavaScriptIcon,
    },
    {
      title: "HTML5",
      iconType: HtmlIcon,
    },
    {
      title: "CSS",
      iconType: CssIcon,
    },
    {
      title: "React",
      iconType: ReactIcon,
    },
    {
      title: "Github",
      iconType: GithubIcon,
    },
    {
      title: "Chrome",
      iconType: ChromeIcon,
    },
  ];

  const hobbies = [
    {
      title: "Painting",
      emoji: "🎨",
      top: "",
      left: "",
    },
    {
      title: "Photograhpy",
      emoji: "📷",
      top: "",
      left: "",
    },
    {
      title: "Gaming",
      emoji: "🎮",
      top: "",
      left: "",
    },
    {
      title: "Hiking",
      emoji: "🧗",
      top: "",
      left: "",
    },
    {
      title: "Music",
      emoji: "🎵",
      top: "",
      left: "",
    },
    {
      title: "Fitness",
      emoji: "🏋",
      top: "",
      left: "",
    },
    {
      title: "Reading",
      emoji: "📚",
      top: "",
      left: "",
    },
  ];
  return (
    <div className="py-20">
      <SectionHeader
        eyebrow="About Me"
        title="Glimpse into my world"
        description="I am a full-stack developer I like for building applications that solve real-world problems. I have experience working with various technologies and frameworks, and I am always eager to learn new things."
      />
      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px] p-0">
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies and tools I use to craft exceptional digital experiences."
            className="px-6 pt-6"
          />
          <ToolboxItems items={toolboxItems} className="mt-6" />
          <ToolboxItems
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName=" -trasnlate-x-1/2"
          />
        </Card>
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader
            title="While I'm not coding"
            description="My interests beyound the digital realm"
            className="px-6 py-6"
          />
          <div className="relative flex-1">
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
