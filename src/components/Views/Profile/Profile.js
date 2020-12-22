import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowDown16 } from "@carbon/icons-react";
import { HeaderContainer, Header, Image, ResumeLink,ProfileLink,ProfileName ,BasicInfoContainer,Email} from './ProfileStyle'
const { LocationCompanyFilled16 ,UserFilled16,PhoneFilled16,Email16} = require('@carbon/icons-react');

const Profile = ({ profileDetails }) => {
    const location = useLocation();
    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={profileDetails.basics.picture}></Image>
                <BasicInfoContainer>
                    <ProfileName>{profileDetails.basics.name}</ProfileName>
                    <h4>
                        <ProfileLink href={`https://gitconnected.com/${profileDetails.basics.username}`}
                            target='_blank'
                            rel="noreferrer noopener"
                        >
                            @{profileDetails.basics.username}
                        </ProfileLink>
                    </h4>
                    <p><UserFilled16></UserFilled16>{profileDetails.basics.label}</p>
                    <p><PhoneFilled16></PhoneFilled16>{profileDetails.basics.phone}</p>
                     <Email>
                     <span> <Email16></Email16> </span>
                         <span></span> {profileDetails.basics.email}
                         </Email>
                    <div><LocationCompanyFilled16></LocationCompanyFilled16>
                   <span> {profileDetails.basics.region}</span>
                    </div>
                </BasicInfoContainer>
            </Header>
            <div>
                <ResumeLink
                    href={`https://gitconnected.com/${profileDetails.basics.username}/resume`}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    View Resume
            </ResumeLink>
            </div>
        </HeaderContainer>
    )
}

export default Profile;