/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

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
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[45%] px-[12px]">
               <div className={`pl-[75px] flex flex-col justify-center items-start gap-[15px] ${index % 2 === 0 ? 'pl-[75px]' : 'pr-[75px] pl-[0px]'}`}>
               <p className="py-[6px] px-[15px] flex justify-center items-center rounded-[30px] mb-[15px] bg-slate-500 text-white text-[16px] font-lato font-medium">{project.year}</p>
                <h1 className="text-[36px] font-anton text-whole-text leading-[40px]">{project.title}</h1>
                <p className="text-[18px] leading-[21px] font-roboto font-medium mb-[30px]">{project.description}</p>
                <a href="#" className="text-[18px] font-roboto font-medium underline text-yellow-500">
                  Check Full Case Study
                </a>
               </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
