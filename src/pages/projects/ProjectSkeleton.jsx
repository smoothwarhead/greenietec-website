import React from 'react'
import SkeletonElement from '../../component/skeletons/SkeletonElement'

const ProjectSkeleton = () => {
  return (
    <div className="skeleton-wrapper">

        <div className="skeleton-con">        

          <div className="project-section">
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />

          
          </div>

        </div>

    </div>
  )
}

export default ProjectSkeleton;