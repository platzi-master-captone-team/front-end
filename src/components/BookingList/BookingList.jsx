import { List } from "./BookingList.styles";

import BookingCard from "../BookingCard/BookingCard";

const BookingList = () => {
    return(
        <List>
            <BookingCard status='active'/>
            <BookingCard status='inactive'/>
            <BookingCard status='finished'/>
        </List>
    )
}

export default BookingList;