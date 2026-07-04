import { events } from '../../content/events';
import CalendarWidget from '../components/CalendarWidget';
import MapEmbed from '../components/MapEmbed';
import SectionHeader from '../components/SectionHeader';
import SectionContainer from '../components/SectionContainer';
import NextEvent from '../components/NextEvent';
import SectionSubHeader from '../components/SectionSubHeader';


export default function ScheduleSection() {
  return (
    <SectionContainer id="schedule">
      <SectionHeader title="Schedule & Location" />
        <SectionSubHeader title="Next Race" />
        <NextEvent className="mb-10" />

        <SectionSubHeader title="Race Schedule" />
        <CalendarWidget events={events} className="mb-10"  />

        <SectionSubHeader title="Location" />
        <MapEmbed height={420} />
    </SectionContainer>
  );
}
