"use client";

import { NO_PHOTO, testVideo } from "@/constants/image";
import Image from "next/image";
import styles from "@/app/VideoCard.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import { useRouter } from "next/navigation";

interface ITrending {
  id: number;
  title: string;
  img: string;
  previewVideo: string;
  viewsCount: number;
  profileImg: string;
  ChanelName: string;
}

const data = [
  {
    id: 1,
    title:
      "KAPIL SHARMA SHOW NEW YEAR SPECIAL | THE KAPIL SHARMA SHOW SEASON 02",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Ninja",
  },
  {
    id: 2,
    title:
      "The Kapil Sharma Show Season 2-As Calm As Prabhu Deva-दी कपिल शर्मा शो 2-Full Ep 109-19th Jan,2020",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Set India",
  },
  {
    id: 3,
    title:
      "ধর্ম নিয়ে ‘তাচ্ছিল্যকারী’দের বিরুদ্ধে ‘জিহাদ’ করতে বললেন আজহারী | Mizanur Rahman Azhari | ATN News",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "ATN News",
  },
  {
    id: 4,
    title: "ভোটের সময় জনগণ বলবে আমরা এই বিএনপি'কে চাইনা । মোঃ গোলাম মাওলা রনি",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Tritiyo Matra",
  },
  {
    id: 5,
    title:
      "SHOCKING! WAR STARTS ALONG INDIA BANGLADESH BORDER! MANIPUR WANTS NIA PROBE ON MIZORAM!",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Connecting Dots by Unacademy",
  },
  {
    id: 6,
    title:
      "Global Military Ranking 2025 What is India's Ranking The Chanakya Dialogues Major Gaurav Arya",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "THE CHANAKYA DIALOGUES HINDI",
  },
  {
    id: 7,
    title:
      "Reality of Quran and Bible | Abrahamic Religions Explained | Dhruv Rathee",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Dhruv Rathee",
  },
  {
    id: 8,
    title:
      "Theory of Evolution | Fact vs Fiction | How Life Originated on Earth? | Dhruv Rathee",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Dhruv Rathee",
  },
  {
    id: 9,
    title: "Chinta Koiren Naa Part 1 | Mosharrof Korim",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "speRk Incorp.",
  },
  {
    id: 10,
    title:
      "Shah Rukh Khan New Hindi Movie 2024 | Dunki Full Movie | Shah Rukh Khan, Taapsee Pannu,Vicky Kaushal",
    img: NO_PHOTO,
    previewVideo: testVideo,
    viewsCount: 320,
    profileImg: NO_PHOTO,
    ChanelName: "Ninja",
  },
];

const Trending = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-1 md:gap-2 lg:gap-2 xl:gap-2 mt-5 lg:mt-[30px] mx-2 md:mx-0">
      {data?.map((item: ITrending) => {
        return (
          <div key={item?.id} className="border border-gray-300">
            {/* <div
              className={`${styles.videoCard} w-full`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              {hoveringId !== item.id && (
                <Image
                  src={item.img}
                  alt="Video Thumbnail"
                  className={`${styles.thumbnail} ${
                    hoveringId ? styles.hidden : ""
                  }`}
                  width={100}
                  height={100}
                />
              )}
              {hoveringId === item.id && item.id && (
                <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[item.id] = el;
                    }
                  }}
                >
                  <source src={item.previewVideo} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div> */}

            <HoverVideoPlayer
              videoSrc={item.previewVideo}
              className="cursor-pointer"
              pausedOverlay={
                <Image
                  src={item.img}
                  alt="Video Thumbnail"
                  className={`${styles.thumbnail}`}
                  width={100}
                  height={100}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
            <h4
              onClick={() => router.push(`/videos/${item.id}`)}
              className="hover:text-red-500 font-medium text-sm px-2 cursor-pointer"
            >
              {item.title}
            </h4>
            <ul className="flex items-center space-x-2 mt-3">
              <li>
                <Image
                  src={item?.profileImg}
                  alt="img"
                  width={30}
                  height={30}
                />
              </li>
              <li>{item.ChanelName}</li>
              <li>{item.viewsCount}M Views</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Trending;
