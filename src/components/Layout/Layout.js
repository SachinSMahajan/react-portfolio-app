import React from 'react'
import Navigation from './../Navigation/Navigation';
import Profile from './../Views/Profile/Profile'
import {StyledContent} from './LayoutStyle'

const Layout = ({ profileDetails, children }) => {

    return (
        <>
            <Navigation></Navigation>
            <div className="bx--grid bx--grid--full-width landing-page">
                <div className="bx--row landing-page__banner">
                    <div className="bx--col-lg-12">
                    <StyledContent>
                    <Profile profileDetails={profileDetails}></Profile>
                    <div>
                        {children}
                    </div>
                </StyledContent>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;