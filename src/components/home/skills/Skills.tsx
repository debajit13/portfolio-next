'use client';
import SectionHeader from '../../../components/global/sectionHeader/SectionHeader';
import SkillCard from './skillCard/SkillCard';
import { SkillDataType, SkillsDataType } from './SkillDataType.interface';

const Skills: React.FC<SkillsDataType> = ({ skillsData }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <SectionHeader title='Skills' />
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-2 gap-8 space-y-0'>
          {skillsData?.map((skill: SkillDataType) => (
            <SkillCard
              key={skill?.name}
              name={skill?.name}
              image={skill?.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
