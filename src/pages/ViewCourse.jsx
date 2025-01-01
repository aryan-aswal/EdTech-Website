import React from 'react'
import { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import CourseReviewModal from '../components/core/CourseReview/CourseReviewModal'
import VideoDetailsSidebar from '../components/core/CourseReview/VideoDetailsSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '..//slices/viewCourseSlice'
import { getFullDetailsOfCourse } from '../services/operations.js/courseDetailsAPI'

const ViewCourse = () => {
  const { courseId } = useParams()
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [reviewModal, setReviewModal] = useState(false)
  const [isSidebarVisible, setSidebarVisible] = useState(false); // New state for sidebar visibility

  useEffect(() => {
    ; (async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token)

      dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
      dispatch(setEntireCourseData(courseData.courseDetails))
      dispatch(setCompletedLectures(courseData.completedVideos))
      let lectures = 0
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length
      })
      dispatch(setTotalNoOfLectures(lectures))
    })()

  }, [])

  return (
    <div className='flex lg:mt-0 mt-20 h-[calc(100vh-3.5rem)]'>
        <div className="relative flex">
            <VideoDetailsSidebar setReviewModal={setReviewModal} setSidebarVisible={setSidebarVisible} isSidebarVisible={isSidebarVisible}/>
        </div>
        <div className=" flex-1 overflow-auto">
          <div className="mx-6 mt-6">
            <Outlet />
          </div>
        </div>

        { reviewModal && <CourseReviewModal modalData={reviewModal} setReviewModal={setReviewModal}/>}
    </div>
  )
}

export default ViewCourse