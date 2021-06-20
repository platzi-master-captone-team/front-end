import { Switch, Route } from 'react-router-dom';

import { TitleBold } from '../../GlobalStyles';

import SectionMenu from '../../components/SectionMenu/SectionMenu';
import Dashboard from '../../components/Dashboard/Dashboard';

import {
    ProfileMain,
    Avatar,
    User,
    UserInfo,
    UserName,
    UserRole
} from './Profile.styles';

const Profile = () => {
    return(
        <ProfileMain>
            <User>
                <Avatar/>
                <UserInfo>
                    <UserName>José Araiza</UserName>
                    <UserRole>Cliente</UserRole>
                </UserInfo>
            </User>
            <TitleBold>Próximas Citas</TitleBold>
            <SectionMenu />
            <Switch>
                <Route exact path="/profile/dashboard" component={Dashboard} ></Route>
            </Switch>
        </ProfileMain>
    )
}

export default Profile;