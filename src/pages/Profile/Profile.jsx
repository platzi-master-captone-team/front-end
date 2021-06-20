import SectionMenu from '../../components/SectionMenu/SectionMenu';
import ProfileSection from '../../components/ProfileSection/ProfileSection';

import {
    ProfileMain,
    Avatar,
    User,
    UserInfo,
    UserName,
    UserRole,
    Sidebar
} from './Profile.styles';

const Profile = () => {
    return(
        <ProfileMain>
            <Sidebar>
                <User>
                    <Avatar/>
                    <UserInfo>
                        <UserName>José Araiza</UserName>
                        <UserRole>Cliente</UserRole>
                    </UserInfo>
                </User>
                <SectionMenu />
            </Sidebar>
            <ProfileSection/>
        </ProfileMain>
    )
}

export default Profile;