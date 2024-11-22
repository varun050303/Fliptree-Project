import React from 'react'

export default function FormHeader({
  topText,
  mainHeading,
  bottomText,
  bottomLinkText,
  bottomLinkHref='#',
  onBottomLinkClick,
}) {
  return (
    <div className="mb-8">
      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2 ml-1">
        {topText}
      </p>
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {mainHeading}<span className="text-blue-500">.</span>
      </h1>
      {bottomText && (
        <p className="text-gray-400 font-semibold text-sm capitalize ml-1">
          {bottomText}{' '}
          <a 
            href={bottomLinkHref}
            onClick={onBottomLinkClick}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            {bottomLinkText}
          </a>
        </p>
      )}
    </div>
  )
}
