import React from 'react'
import FormHeader from './FormHeader.jsx'
import AuthHeader from '../../Header/AuthHeader.jsx'
export default function AuthForm({
    formComponent,
    bottomLinkText,
    bottomLinkHref,
    topText,
    mainHeading,
    bottomText
  }) {
  return (
    <div className='container h-full max-w-screen-lg mx-auto flex items-center shadow-xl rounded-lg min-h-[700px]'>
      <div className='content-section grid grid-rows-3 place-content-start w-1/2'>
        <div className='header'>
          <AuthHeader/>
        </div>
        <div className='grid grid-rows-subgrid gap-4 row-span-3 ml-4'>
          <div className='form w-fit ml-10 h-full row-start-3'>
            <FormHeader
              topText={topText}
              mainHeading={mainHeading}
              bottomText={bottomText}
              bottomLinkText={bottomLinkText}
              onBottomLinkClick={() => navigate({ bottomLinkHref })}
            />
            {formComponent}
          </div>
        </div>
      </div>
      <div className='relative w-1/2 flex h-full'>
        <img className='rounded-r-lg' src='/Group1.png' />
      </div>
    </div>
  )
}
