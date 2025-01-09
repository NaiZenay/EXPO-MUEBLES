import React from 'react'
import "./pageContent.css"
const PageContent = ({ children }) => {
    return (
        <div className='content'>
            {children}
        </div>
    )
}

export default PageContent
