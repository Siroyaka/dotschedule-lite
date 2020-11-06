import React from 'react';

export const NoImageAvater = (props: {size?: 'small' | 'middle'}) => {
  const { size } = props;
  const textSize = size === 'small' ? 'text-lg' : 'text-2xl';
  const avaterSize = size === 'small' ? 'h-8 w-8' : 'h-12 w-12';
  return(
    <div className={`rounded-full bg-gray-200 flex-shrink-0 text-center flex justify-center items-center ${avaterSize}` }>
      <span className={textSize}>他</span>
    </div>
  )
}