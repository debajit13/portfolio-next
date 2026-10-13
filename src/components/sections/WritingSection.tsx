import { articles, writingStats } from '@/lib/content';
import Section from '../ui/Section';
import ArticleCard from '../writing/ArticleCard';

const WritingSection = () => (
  <Section
    id='writing'
    eyebrow='Writing'
    title='Latest articles'
    description={`${writingStats.posts} posts on ${writingStats.platform} with ${writingStats.views} views, plus hands-on labs.`}
    tone='surface'
    action={{ href: '/writing', label: `All ${articles.length} articles` }}
  >
    <ul className='grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
      {articles.slice(0, 3).map((article) => (
        <ArticleCard key={article.blogLink} article={article} />
      ))}
    </ul>
  </Section>
);

export default WritingSection;
