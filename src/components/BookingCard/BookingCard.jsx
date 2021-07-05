import { 
    Card,
    Avatar,
    BookingDetails,
    BookingTitle,
    BookingDate,
    BookingTime,
    JoinChat,
    ChatLink,
    Indicator,
    Finished
} from "./BookingCard.styles";

const BookingCard = ( {status, name, date, time, avatar, booking_id} ) => {
    return (
        <Card>
            <Avatar src={'https://randomuser.me/api/portraits/'+avatar+'.jpg'}/>
            <BookingDetails>
                <BookingTitle>Cita con {name}</BookingTitle>
                <BookingDate>{date}</BookingDate>
                <BookingTime>{time}</BookingTime>
                <JoinChat>
                    <ChatLink status={status} to={'/chat/'+booking_id+'?name='+name+'&avatar='+avatar+'&date='+date+'&time='+time+'&status='+status}>Unirse</ChatLink>
                    <Finished status={status}>Finalizada</Finished>
                    <Indicator status={status}></Indicator>
                </JoinChat>
            </BookingDetails>
        </Card>
    )
}

export default BookingCard;