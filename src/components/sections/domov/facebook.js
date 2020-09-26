import React from 'react'
import { FacebookProvider, Page } from 'react-facebook';
import '../../../saas/components/sections/Facebook.scss'


const Facebook = () => {
    return (
        <>
        <h1 className='news-heading'>Novinky</h1>
        <div className='facebook-section'>
            
        <FacebookProvider appId='1202272930155681'>
            <Page  href="https://www.facebook.com/prooculi" tabs="timeline" />
        </FacebookProvider>
        </div>
        </>
    )
}

export default Facebook
