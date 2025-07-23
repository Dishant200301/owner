import React from 'react';
import { GraderMeta } from './GraderMeta';
import { GraderPhoneDisplay } from './GraderPhoneDisplay';
import { GraderForm } from './GraderForm';

export const SectionHpGrader: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-neutral-50 lg:py-24"> {/* section_hp-grader section-full */}
      <div className="px-4 sm:px-6 lg:px-8"> {/* padding-global */}
        <div className="max-w-7xl mx-auto"> {/* container-large */}
          <div className="flex flex-col items-center text-center"> {/* hp-grader, center aligned */}
            <div className="max-w-3xl"> {/* hp-grader_head, limit width */}
              <GraderMeta />
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"> {/* h72 */}
                See where your restaurant is losing sales online
              </h1>
            </div>
            <div className="relative flex flex-col lg:flex-row items-center justify-center lg:space-x-12 mt-12 w-full"> {/* hp-grader_main */}
              <GraderPhoneDisplay />
              <GraderForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};