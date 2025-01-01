import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { ImCross } from "react-icons/im";
export default function VideoDetailsSidebar({ setReviewModal, isSidebarVisible, setSidebarVisible }) {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="lg:hidden fixed top-14 left-0 w-full z-20 bg-richblack-800 ">
        {!isSidebarVisible && (
          <button
            className="flex items-center px-4 py-3 text-white bg-richblack-800 hover:bg-richblack-800 transition-colors duration-200 w-full"
            onClick={() => setSidebarVisible(!isSidebarVisible)}
            title="Open Sidebar"
          >
            <HiMenuAlt1 size={24} className="mr-2" />
            <span className="text-sm font-semibold">Menu</span>
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-[80%] max-w-[320px] bg-richblack-800 border-r-[1px] border-richblack-700 transform ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-[320px]`}
      >
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => {
                navigate(`/dashboard/enrolled-courses`);
              }}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>
            <IconBtn
              text="Add Review"
              customClasses="ml-auto"
              onclick={() => setReviewModal(true)}
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <div>
              <p>{courseEntireData?.courseName}</p>
              <p className="text-sm font-semibold text-richblack-500">
                {completedLectures?.length} / {totalNoOfLectures}
              </p>
            </div>
            <button onClick={() => setSidebarVisible(!isSidebarVisible)}>
              <ImCross className="bg-richblack-100 text-richblack-700 rounded-full p-2" fontSize={30} />
            </button>
          </div>
        </div>

        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData.map((course, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-5"
              onClick={() => setActiveStatus(course?._id)}
              key={index}
            >
              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">{course?.sectionName}</div>
                <div className="flex items-center gap-3">
                  <span
                    className={`${activeStatus === course?.sectionName
                      ? "rotate-0"
                      : "rotate-180"
                      } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {activeStatus === course?._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {course.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3 px-5 py-2 ${videoBarActive === topic._id
                        ? "bg-yellow-200 font-semibold text-richblack-800"
                        : "hover:bg-richblack-900"
                        } `}
                      key={i}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                        );
                        setVideoBarActive(topic._id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures.includes(topic?._id)}
                        onChange={() => { }}
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
