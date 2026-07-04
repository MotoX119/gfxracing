import AboutContent from '../../content/about.mdx';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

export default function AboutSection() {
  return (
    <SectionContainer isStriped={true} id="about">
      <SectionHeader title="About" />
      <article className="prose max-w-none" aria-labelledby="about-heading">
        <AboutContent />
      </article>
    </SectionContainer>
  );
}
