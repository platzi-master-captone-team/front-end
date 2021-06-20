import { SectionTitle } from "../ProfileSection/ProfileSection.styles";

import BookingList from "../BookingList/BookingList";

const SectionDashboard = () => {
    return(
        <>
            <SectionTitle>Próximas Citas</SectionTitle>
            <BookingList />
        </>
    )
}

export default SectionDashboard;