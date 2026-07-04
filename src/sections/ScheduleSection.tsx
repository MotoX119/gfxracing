import { events } from '../../content/events';
import CalendarWidget from '../components/CalendarWidget';
import SectionHeader from '../components/SectionHeader';
import SectionContainer from '../components/SectionContainer';
import NextEvent from '../components/NextEvent';
import SectionSubHeader from '../components/SectionSubHeader';


export default function ScheduleSection() {
  return (
    <SectionContainer id="schedule" isStriped={true}>
      <SectionHeader title="Race Schedule" />
        <SectionSubHeader title="Next Race" />
        <NextEvent className="mb-10" />

        <SectionSubHeader title="Events Calendar" />
        <CalendarWidget events={events} className="mb-10"  />
    </SectionContainer>
  );
}
