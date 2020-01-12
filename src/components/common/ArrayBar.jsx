import React from 'react'



const ArrayBar = ({className,id,color,height}) => {
    return (
        <div
            className={className}
            style={{
              backgroundColor: color,
              height: `${height}px`,
            }}></div>
    );
}

export default ArrayBar;