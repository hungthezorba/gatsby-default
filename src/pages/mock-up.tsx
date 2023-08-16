import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from 'react-helmet'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Helmet>
        <link rel="stylesheet" href="/global.css" />
    </Helmet>
    <div className="container-deep">
      Mock Up  
    </div> 
    </>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
