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

import avatar from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar2.png';

const Profile = () => {

    const { login } = useContext(LoginContext);

    return(
        <ProfileMain>
            <Sidebar>
                <User>
                    <Avatar src={ login.role === 'Cliente' ? avatar : avatar2 }/>
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
