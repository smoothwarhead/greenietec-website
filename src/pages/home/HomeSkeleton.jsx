import React from 'react'
import SkeletonElement from '../../component/skeletons/SkeletonElement'

const HomeSkeleton = () => {
  return (
    <div className="skeleton-wrapper">

        <div className="skeleton-con">        

            <div className="section-up">
                <SkeletonElement type="title" />
            </div>

            <div className="section-btm">
                <SkeletonElement type="sub-title" />
                <SkeletonElement type="text" />
            </div>

        </div>

    </div>
  )
}

export default HomeSkeleton