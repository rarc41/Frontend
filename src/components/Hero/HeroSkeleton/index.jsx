// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HeroSkeleton = () => {
  return (
    /*Skeleton parameterization */
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
      <div
        aria-label="hero content"
        className={'home__hero-container'}
      >
        <div className="home__hero-image">
          <Skeleton height={320}/>
        </div>
      </div>
    </SkeletonTheme>
  )
};

export default HeroSkeleton;
