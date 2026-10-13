import { pageMetadata } from '@/lib/metadata';
import PageIntro from '@/components/layout/PageIntro';
import TalkArchive from '@/components/speaking/TalkArchive';

export const metadata = pageMetadata(
  '/speaking',
  'Speaking',
  'Talks by Debajit Mallick at DevFests, Google I/O Extended, React and GDG meetups on frontend engineering, web performance, Firebase and AI.'
);

const SpeakingPage = () => (
  <div className='mx-auto max-w-page px-4 pb-24 sm:px-6'>
    <PageIntro title='Speaking'>
      Talks at DevFests, Google I/O Extended events, community meetups and universities,
      mostly about frontend engineering, Firebase and building with AI.
    </PageIntro>
    <TalkArchive />
  </div>
);

export default SpeakingPage;
