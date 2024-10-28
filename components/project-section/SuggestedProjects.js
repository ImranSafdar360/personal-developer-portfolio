/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function SuggestedProjects({ projects, limit }) {
  return (
    <section className="w-full h-full">
      <div className="w-full flex justify-start items-center gap-[30px] overflow-auto">
      {projects.slice(0, limit).map((project, index) => (
            <div
              key={project.id}
              className={`w-[500px] h-full flex flex-col cursor-pointer gap-[24px]`}
            >
              <Link href={`/projects/${project.id}`}>
              <div className="w-[500px] h-[350px] bg-slate-50 rounded-[24px] overflow-hidden">
              <img
              src={project.image}
              alt={project.title}
              className="transition-transform duration-300 hover:scale-105 w-full h-full"
              style={{ objectFit: 'cover' }}
            />
              </div>
              </Link>
              <div className="w-full flex flex-col gap-[15px]">
              <Link href={`/projects/${project.id}`} className="text-[36px] font-anton text-whole-text leading-[40px]">{project.title}</Link>
              <p className="text-[18px] leading-[21px] font-roboto font-medium mb-[30px]">{project.description}</p>
              <Link className="text-[18px] font-roboto font-medium underline text-yellow-500" href={`/projects/${project.id}`}>
                  Check Full Case Study
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
