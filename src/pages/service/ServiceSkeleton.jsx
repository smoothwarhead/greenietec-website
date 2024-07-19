import React from 'react'
import SkeletonElement from '../../component/skeletons/SkeletonElement'

const ServiceSkeleton = () => {
  return (
    <div className="skeleton-wrapper">

        <div className="skeleton-con">        

            <div className="section-up">
                <SkeletonElement type="title" />
            </div>

            <div className="section-btm">
               <SkeletonElement type="text" />
            </div>

        </div>

    </div>
  )
}

export default ServiceSkeleton;