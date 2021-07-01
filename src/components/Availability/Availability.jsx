import {  } from "../ProfileSection/ProfileSection.styles";
import { WeekCalendar, Slot, Day, Label, LabelResp, TimeLabel, FormButton } from "./Availability.styles";

const SectionAvailability = () => {

    function handleClick (ev) {
        console.log('Slot Clicked: ' + ev.target.dataset.avail)
        
    }

    return(
        <>
            <WeekCalendar>
                <Day>
                    <TimeLabel></TimeLabel>
                    <TimeLabel>00:00</TimeLabel>
                    <TimeLabel>01:00</TimeLabel>
                    <TimeLabel>02:00</TimeLabel>
                    <TimeLabel>03:00</TimeLabel>
                    <TimeLabel>04:00</TimeLabel>
                    <TimeLabel>05:00</TimeLabel>
                    <TimeLabel>06:00</TimeLabel>
                    <TimeLabel>07:00</TimeLabel>
                    <TimeLabel>08:00</TimeLabel>
                    <TimeLabel>09:00</TimeLabel>
                    <TimeLabel>10:00</TimeLabel>
                    <TimeLabel>11:00</TimeLabel>
                    <TimeLabel>12:00</TimeLabel>
                    <TimeLabel>13:00</TimeLabel>
                    <TimeLabel>14:00</TimeLabel>
                    <TimeLabel>15:00</TimeLabel>
                    <TimeLabel>16:00</TimeLabel>
                    <TimeLabel>17:00</TimeLabel>
                    <TimeLabel>18:00</TimeLabel>
                    <TimeLabel>19:00</TimeLabel>
                    <TimeLabel>20:00</TimeLabel>
                    <TimeLabel>21:00</TimeLabel>
                    <TimeLabel>22:00</TimeLabel>
                    <TimeLabel>23:00</TimeLabel>
                </Day>
                <Day>
                    <Label>Lunes</Label>
                    <LabelResp>Lun</LabelResp>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
                <Day>
                    <Label>Martes</Label>
                    <LabelResp>Mar</LabelResp>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
                <Day>
                    <Label>Miércoles</Label>
                    <LabelResp>Mié</LabelResp>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
                <Day>
                    <Label>Jueves</Label>
                    <LabelResp>Jue</LabelResp>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
                <Day>
                    <Label>Viernes</Label>
                    <LabelResp>Vie</LabelResp>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
                <Day>
                    <Label>Sábado</Label>
                    <LabelResp>Sáb</LabelResp>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
                <Day>
                    <Label>Domingo</Label>
                    <LabelResp>Dom</LabelResp>
                    <Slot id='dom0' active='' onClick={handleClick}></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot active='active'></Slot>
                    <Slot active='active'></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                    <Slot></Slot>
                </Day>
            </WeekCalendar> 
            <FormButton>Actualizar Disponibilidad</FormButton>
        </>
    )
}

export default SectionAvailability;