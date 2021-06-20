import { List } from "./BookingList.styles";

import BookingCard from "../BookingCard/BookingCard";

const BookingList = () => {
    return(
        <List>
            <BookingCard status='active'/>
            <BookingCard />
            <BookingCard />
        </List>
    )
}

export default BookingList;