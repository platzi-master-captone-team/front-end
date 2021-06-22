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

const BookingCard = ( {status} ) => {
    return (
        <Card>
            <Avatar />
            <BookingDetails>
                <BookingTitle>Cita con Carmen Herrera</BookingTitle>
                <BookingDate>Viernes 18 de Junio 2021</BookingDate>
                <BookingTime>11:00 - 12:00</BookingTime>
                <JoinChat>
                    <ChatLink status={status} to='/chat'>Unirse</ChatLink>
                    <Finished status={status}>Finalizada</Finished>
                    <Indicator status={status}></Indicator>
                </JoinChat>
            </BookingDetails>
        </Card>
    )
}

export default BookingCard;