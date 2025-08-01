import React from 'react'
import {Helmet} from 'react-helmet'


export default function OGMeta({title, url, image}){

    return(
        <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
        </Helmet>
    )
}