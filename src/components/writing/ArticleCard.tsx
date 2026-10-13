import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/content';

const ArticleCard = ({ article }: { article: Article }) => (
  <li>
    <Link
      href={article.blogLink}
      target='_blank'
      rel='noopener noreferrer'
      className='group block'
    >
      <div className='overflow-hidden rounded-inner bg-surface'>
        <Image
          src={article.blogImage}
          alt=''
          width={640}
          height={320}
          className='aspect-[2/1] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100'
        />
      </div>
      <p className='text-caption mt-4 text-fg-tertiary'>{article.topics.join(' · ')}</p>
      <h3 className='text-headline mt-1.5 group-hover:text-accent'>{article.blogTitle}</h3>
      <p className='mt-2 line-clamp-2 text-[0.9375rem] leading-relaxed text-fg-secondary'>
        {article.blogDescription}
      </p>
    </Link>
  </li>
);

export default ArticleCard;
