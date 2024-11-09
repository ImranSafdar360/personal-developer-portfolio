/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function SuggestedProjects({ projects, limit }) {
  
  return (
    <section className="w-full h-full">
      <div className="w-full flex items-center gap-[40px] overflow-auto">
      {projects.slice(0, limit).map((project, index) => (
            <div
              key={project.id}
              className={`w-[335px] md:w-[500px] h-full flex flex-col cursor-pointer gap-[24px]`}
            >
              <Link href={`/projects/${project.id}`}>
              <div className="w-[335px] md:w-[500px] h-[250px] md:h-[350px] lg:h-[350px] bg-slate-50 rounded-[24px] overflow-hidden">
              <img
              src={project.image}
              alt={project.title}
              className="transition-transform duration-300 hover:scale-105 w-full h-full"
              style={{ objectFit: 'cover' }}
            />
              </div>
              </Link>
              <div className="w-full flex flex-col gap-[10px] lg:gap-[15px] p-[4px] md:px-[8px] lg:px-[12px]">
              <Link href={`/projects/${project.id}`} className="text-[24px] md:text-[28px] lg:text-[36px] font-anton text-whole-text hover:text-secondary-text transition-all line-clamp-1 leading-tight">{project.title}</Link>
              <p className="text-[16px] md:text-[18px] font-robotoRegular text-secondary-text line-clamp-3 leading-relaxed">{project.description}</p>
              <Link className="text-[16px] md:text-[18px] font-robotoRegular underline text-yellow-400" href={`/projects/${project.id}`}>
                  Check Full Case Study
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
