import { SectionTitle } from "../ProfileSection/ProfileSection.styles";
import { LoginContext } from '../../utils/loginStatus';

import { useContext } from "react";

import BookingList from "../BookingList/BookingList";
import ProfileChart from '../ProfileChart/ProfileChart';



const SectionDashboard = () => {

    const { login } = useContext(LoginContext);

    return(
        <>
            <SectionTitle profile="Experto" $show={login.role}>Actividad Reciente</SectionTitle>
            <ProfileChart profile="Experto" show={login.role}/>
            <SectionTitle>Próximas Citas</SectionTitle>
            <BookingList />
        </>
    )
}

export default SectionDashboard;