import { List } from "./BookingList.styles";

import BookingCard from "../BookingCard/BookingCard";

const BookingList = () => {
    return(
        <List>
            <BookingCard status='active' name="Ana Rojas" date="Jueves 15 Julio 2021" time="17:00 - 18:00"  avatar="women/51"  booking_id="A123B4"/>
            <BookingCard status='scheduled' name="Daniel Díaz" date="Lunes 25 Julio 2021" time="10:00 - 11:00"  avatar="men/51" booking_id="A123B5"/>
            <BookingCard status='scheduled' name="Cecilia García" date="Viernes 30 Julio 2021" time="09:00 - 10:00"  avatar="women/40" booking_id="A123B6"/>
        </List>
    )
}

export default BookingList;