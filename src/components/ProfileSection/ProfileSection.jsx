import { Switch, Route } from 'react-router-dom';
import { Section } from "./ProfileSection.styles";

import SectionDashboard from '../SectionDashboard/SectionDashboard';
import SectionHistory from '../SectionHistory/SectionHistory';
import SectionAvailability from '../SectionAvailability/SectionAvailability';
import SectionPayment from '../SectionPayment/SectionPayment';
import SectionPersonal from '../SectionPersonal/SectionPersonal';
import SectionProfessional from '../SectionProfessional/SectionProfessional';
import SectionTerms from '../SectionTerms/SectionTerms';

const ProfileSection = () => {
    return(
        <Section>
            <Switch>
                <Route exact path="/profile/dashboard" component={SectionDashboard} ></Route>
                <Route exact path="/profile/history" component={SectionHistory} ></Route>
                <Route exact path="/profile/availability" component={SectionAvailability} ></Route>
                <Route exact path="/profile/payment" component={SectionPayment} ></Route>
                <Route exact path="/profile/personal" component={SectionPersonal} ></Route>
                <Route exact path="/profile/profesional" component={SectionProfessional} ></Route>
                <Route exact path="/profile/terms" component={SectionTerms} ></Route>
                </Switch>
        </Section>
    )
}

export default ProfileSection;