/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function SelectedWork({ projects, limit }) {
  return (
    <section className="w-full h-full">
      <div className="w-full flex flex-col items-center gap-[60px] lg:gap-[140px]">
      {projects.slice(0, limit).map((project, index) => (
            <div
              key={project.id}
              className={`w-full min-h-[400px] rounded-2xl overflow-hidden flex flex-col justify-between items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="w-full lg:w-[55%] h-[250px] md:h-[350px] lg:h-[430px] object-cover rounded-[30px] overflow-hidden ">
              <Link href={`/projects/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  layout="fit"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              </div>
              <div className="w-full lg:w-[45%] p-[4px] md:px-[8px] lg:px-[12px]">
               <div className={`flex flex-col justify-center items-start gap-[15px] ${index % 2 === 0 ? 'lg:pl-[75px]' : 'lg:pr-[75px] lg:pl-[0px]'}`}>
               <p className="py-2 px-4 bg-yellow-400 text-yellow-900 rounded-full text-[14px] md:text-[16px] font-latoBold mt-4">{project.date}</p>
                <Link  href={`/projects/${project.id}`} className="text-[24px] md:text-[28px] lg:text-[36px] font-anton text-whole-text hover:text-secondary-text transition-all line-clamp-2 leading-tight">{project.title}</Link>
                <p className="text-[16px] md:text-[18px] font-robotoRegular text-secondary-text line-clamp-3 leading-relaxed">{project.description}</p>
                <Link className="text-[16px] md:text-[18px] font-robotoRegular underline text-yellow-400" href={`/projects/${project.id}`}>
                  Check Full Case Study
                </Link>
               </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
