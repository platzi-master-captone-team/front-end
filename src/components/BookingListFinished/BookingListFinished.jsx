import { List } from "../BookingList/BookingList.styles";

import BookingCard from "../BookingCard/BookingCard";

const BookingListFinished = () => {
    return(
        <List>
            <BookingCard status='done' name="Daniel Díaz" date="Viernes 25 Junio 2021" time="17:00 - 18:00" avatar="men/51" booking_id="A123B4"/>
            <BookingCard status='done' name="Daniel Díaz" date="Lunes 14 Junio 2021" time="10:00 - 11:00" avatar="men/51" booking_id="A123B5"/>
            <BookingCard status='done' name="Cecilia García" date="Viernes 11 Junio 2021" time="09:00 - 10:00" avatar="women/40" booking_id="A123B6"/>
        </List>
    )
}

export default BookingListFinished;