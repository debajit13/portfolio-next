import Image from 'next/image';
import { motion } from 'framer-motion';
import { SkillDataType } from './SkillDataType.interface';

const SkillCard: React.FC<SkillDataType> = ({ name, image }) => {
  return (
    <div
      key={name}
      className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-md'
    >
      <div className='flex h-full flex-col justify-center gap-4 p-6'>
        <motion.div
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 360,
          }}
          initial={{ scale: 0, opacity: 0 }}
          className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-16 lg:w-16 dark:bg-primary-900'
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          viewport={{
            once: true,
          }}
        >
          <picture>
            <source srcSet={image} type='image/svg' />
            <Image
              src={image}
              alt={name}
              height={150}
              width={150}
              loading='lazy'
            />
          </picture>
        </motion.div>

        <h3 className='mb-2 text-xl font-bold dark:text-white'>{name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
