import React from 'react';
import Skeleton from 'react-loading-skeleton';

function ProductCardSkeleton() {
  return (
    <div style={{position:'relative', zIndex:'-1'}}>
      <div style={{height:'225px'}}>
        <Skeleton height={225}/>
      </div>
      <div style={{padding:'20px 0'}}>
        <h2 style={{fontSize:'30px'}} >
          <Skeleton/>
        </h2>
        <h2  style={{fontSize:'60px'}}>
          <Skeleton/>
        </h2>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
