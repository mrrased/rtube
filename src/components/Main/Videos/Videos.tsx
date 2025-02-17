"use client";

import { testVideo, thumbnail } from "@/constants/image";
import { Col, Row } from "antd";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { RiFlagFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import HoverVideoPlayer from "react-hover-video-player";
import Image from "next/image";
import styles from "@/app/detailVideo.module.css";

interface IDetails {
  id: number;
  title: string;
  video: string;
  chanel: string;
  views: string;
  thumbnail: string;
  uploadTime: string;
}

const list = [
  {
    id: 1,
    title:
      "Best of Arijit Singh || Arijit Singh Sad Songs 💔😢|| Sad Songs || Arijit Singh",
    video: testVideo,
    chanel: "Ekhon Tv",
    thumbnail: thumbnail,
    views: "50k",
    uploadTime: "20",
  },
  {
    id: 2,
    title:
      "Best of Arijit Singh || Arijit Singh Sad Songs 💔😢|| Sad Songs || Arijit Singh",
    video: testVideo,
    chanel: "Ekhon Tv",
    views: "50k",
    thumbnail: thumbnail,
    uploadTime: "20",
  },
  {
    id: 3,
    title:
      "Best of Arijit Singh || Arijit Singh Sad Songs 💔😢|| Sad Songs || Arijit Singh",
    video: testVideo,
    chanel: "Ekhon Tv",
    views: "50k",
    thumbnail: thumbnail,
    uploadTime: "20",
  },
  {
    id: 4,
    title:
      "Best of Arijit Singh || Arijit Singh Sad Songs 💔😢|| Sad Songs || Arijit Singh",
    video: testVideo,
    chanel: "Ekhon Tv",
    views: "50k",
    thumbnail: thumbnail,
    uploadTime: "20",
  },
  {
    id: 5,
    title:
      "Best of Arijit Singh || Arijit Singh Sad Songs 💔😢|| Sad Songs || Arijit Singh",
    video: testVideo,
    chanel: "Ekhon Tv",
    views: "50k",
    thumbnail: thumbnail,
    uploadTime: "20",
  },
];

const Videos = ({ slug }: { slug: string }) => {
  console.log(slug);
  return (
    <div className="mx-6 min-h-screen mt-2">
      <>
        <Row className="mt-2 mx-2 2xl:mx-20">
          <Col xs={24} md={16} xl={16} className="pr-3">
            <video width="100%" height="240" controls preload="none">
              <source src={testVideo} type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-medium">
              Best of Arijit Singh || Arijit Singh Sad Songs 💔😢|| Sad Songs ||
              Arijit Singh
            </h3>
            <ul className="flex items-center space-x-3 mt-2">
              <li className="bg-slate-300 px-2 py-1 rounded-md">
                <ul className="flex items-center space-x-3 text-xl">
                  <li>
                    <BiLike className="cursor-pointer" />
                  </li>
                  <li>2,071/5</li>
                  <li>
                    <BiDislike className="cursor-pointer" />
                  </li>
                </ul>
              </li>
              <li className="flex items-center space-x-1 text-lg bg-slate-300 px-2 py-1 rounded-md cursor-pointer">
                <span>
                  <FaHeart />
                </span>{" "}
                <span>Favorite</span>
              </li>
              <li className="flex items-center space-x-2 text-lg bg-slate-300 px-2 py-1 rounded-md cursor-pointer">
                <span>
                  <FaComments />
                </span>
                <span>Comments 19</span>
              </li>
              <li className="flex items-center space-x-1 text-lg bg-slate-300 px-2 py-1 rounded-md cursor-pointer">
                <span>
                  <IoIosShareAlt />
                </span>
                <span>Share</span>
              </li>
              <li className="flex items-center space-x-1 text-lg bg-slate-300 px-2 py-1 rounded-md cursor-pointer">
                <span>
                  <IoMdListBox />
                </span>
                <span>About</span>
              </li>
              <li className="flex items-center space-x-1 text-lg bg-slate-300 px-2 py-2.5 rounded-md cursor-pointer">
                <RiFlagFill />
              </li>
            </ul>
          </Col>
          <Col xs={24} md={8} className="pl-3">
            {list?.map((item: IDetails) => {
              return (
                <div key={item.id} className="flex items-start space-x-3 mb-6">
                  <div className="w-[250px] h-[100px] my-auto">
                    <div>
                      <HoverVideoPlayer
                        videoSrc={item.video}
                        className="cursor-pointer"
                        style={{ width: "200px", height: "90px" }}
                        pausedOverlay={
                          <Image
                            src={item.thumbnail}
                            alt="Video Thumbnail"
                            className={`${styles.thumbnail}`}
                            width={100}
                            height={100}
                            style={{
                              objectFit: "cover",
                              height: "115px",
                              width: "250px",
                            }}
                          />
                        }
                        loadingOverlay={
                          <div className="loading-overlay">
                            <div className="loading-spinner" />
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div>
                      <h4>{item.title}</h4>
                      <h5>{item.chanel}</h5>
                      <ul className="flex items-center space-x-2">
                        <li>
                          <span>{item.views}</span> <span>views</span>
                        </li>
                        <li>{item.uploadTime} hour ago</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Videos;
