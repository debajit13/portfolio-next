import { pageMetadata } from '@/lib/metadata';
import { writingStats } from '@/lib/content';
import PageIntro from '@/components/layout/PageIntro';
import ArticleArchive from '@/components/writing/ArticleArchive';

export const metadata = pageMetadata(
  '/writing',
  'Writing',
  `Articles and hands-on labs by Debajit Mallick on React, TypeScript, Firebase, web performance and AI tooling. ${writingStats.posts} posts on ${writingStats.platform}, ${writingStats.views} views.`
);

const WritingPage = () => (
  <div className='mx-auto max-w-page px-4 pb-24 sm:px-6'>
    <PageIntro title='Writing'>
      Articles and hands-on labs on React, Firebase, web performance and the tools I use
      every day. {writingStats.posts} posts on {writingStats.platform} with {writingStats.views}{' '}
      views.
    </PageIntro>
    <ArticleArchive />
  </div>
);

export default WritingPage;
