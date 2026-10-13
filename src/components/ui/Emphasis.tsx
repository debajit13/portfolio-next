import { splitEmphasis } from '@/lib/content';

const Emphasis = ({ text }: { text: string }) => (
  <>
    {splitEmphasis(text).map(({ text: part, strong }, index) =>
      strong ? (
        <strong key={index} className='font-semibold text-fg'>
          {part}
        </strong>
      ) : (
        part
      )
    )}
  </>
);

export default Emphasis;
