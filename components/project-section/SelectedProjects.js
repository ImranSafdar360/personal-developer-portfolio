/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function SelectedWork({ projects, limit }) {
  return (
    <section className="w-full h-full">
      <div className="w-full flex flex-col items-center gap-[140px]">
      {projects.slice(0, limit).map((project, index) => (
            <div
              key={project.id}
              className={`w-full h-[400px] rounded-2xl overflow-hidden flex flex-row justify-between items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-[55%] h-full object-cover rounded-[30px] overflow-hidden">
              <Link href={`/projects/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  layout="fit"
                  className="w-full h-full object-cover"
                />
              </Link>
              </div>
              <div className="w-[45%] px-[12px]">
               <div className={` flex flex-col justify-center items-start gap-[15px] ${index % 2 === 0 ? 'pl-[75px]' : 'pr-[75px] pl-[0px]'}`}>
               <p className="py-[6px] px-[15px] flex justify-center items-center rounded-[30px] mb-[15px] bg-sky-300 bg-opacity-80 text-[16px] font-lato font-medium text-sky-900">Project Tag</p>
                <Link  href={`/projects/${project.id}`} className="text-[36px] font-anton text-whole-text leading-[40px]">{project.title}</Link>
                <p className="text-[18px] leading-[21px] font-roboto font-medium mb-[30px]">{project.description}</p>
                <Link className="text-[18px] font-roboto font-medium underline text-sky-300" href={`/projects/${project.id}`}>
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
