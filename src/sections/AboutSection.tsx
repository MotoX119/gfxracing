import AboutContent from '../../content/about.mdx';
import MapEmbed from '../components/MapEmbed';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import SectionSubHeader from '../components/SectionSubHeader';

export default function AboutSection() {
  return (
    <SectionContainer isStriped={false} id="about">
      <SectionHeader className="mb-10" title="About" />
      
      {/* Mark down parsed content from about.dmx */}
      <article className="prose max-w-none" aria-labelledby="about-heading">
        <AboutContent />
      </article>

      <SectionSubHeader title="Location" />
      <MapEmbed height={420} />
    </SectionContainer>
  );
}
