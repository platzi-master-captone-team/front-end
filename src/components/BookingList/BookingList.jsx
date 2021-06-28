import { List } from "./BookingList.styles";

import BookingCard from "../BookingCard/BookingCard";

const BookingList = () => {
    return(
        <List>
            <BookingCard status='active'/>
            <BookingCard status='scheduled'/>
            <BookingCard status='done'/>
        </List>
    )
}

export default BookingList;