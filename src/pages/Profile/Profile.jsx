import { useContext } from "react";
import SectionMenu from '../../components/SectionMenu/SectionMenu';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import { LoginContext } from '../../utils/loginStatus';
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

    const { login } = useContext(LoginContext);
    const avatarURL = 'https://ui-avatars.com/api/?name='+login.name+'&rounded=true&background=FFB900&bold=true';

    return(
        <ProfileMain>
            <Sidebar>
                <User>
                    <Avatar src={ avatarURL }/>
                    <UserInfo>
                        <UserName>{login.name}</UserName>
                        <UserRole>{login.role}</UserRole>
                    </UserInfo>
                </User>
                <SectionMenu />
            </Sidebar>
            <ProfileSection/>
        </ProfileMain>
    )
}

export default Profile;
