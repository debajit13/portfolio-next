import { talks } from '@/lib/content';
import Section from '../ui/Section';
import TalkRow from '../speaking/TalkRow';

const SpeakingSection = () => (
  <Section
    id='speaking'
    eyebrow='Speaking'
    title='Recent talks'
    action={{ href: '/speaking', label: `All ${talks.length} talks` }}
  >
    <ul className='divide-y divide-line/70 border-y border-line/70'>
      {talks.slice(0, 4).map((talk) => (
        <TalkRow key={`${talk.title}-${talk.date}`} talk={talk} showYear />
      ))}
    </ul>
  </Section>
);

export default SpeakingSection;
