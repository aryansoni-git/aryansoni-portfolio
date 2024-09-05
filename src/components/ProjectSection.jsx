import LoadData from "@/data/LoadData";
import Image from "next/image";
import Button from "./Button";

const Tag = ({ tagName }) => (
    <span className="bg-[#272727] font-medium text-xs text-center px-4 py-2 border-black-border rounded-md">
        {tagName}
    </span>
);

function ProjectCard({ data }) {
    const tags = (data.isReact)
        ? [`ReactJs`, `NextJs`, `Tailwind-CSS`, `SwiperJs`]
        : [`HTML`, `CSS`, `JavaScript`];

    return (
        <div className={`group flex flex-col justify-center gap-2 bg-custom-card border-black-border border-[0.5px] rounded-lg px-responsive-padding-x py-responsive-padding-y md:px-5 md:py-6 `}>
            <div>
                <Image
                    src={data.src}
                    alt={data.alt}
                    height={500}
                    width={500}
                />
            </div>
            <h4 className="text-xl font-semibold py-1 group-hover:text-warm-orange">{data.alt}</h4>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:flex">
                {tags.map((tag, index) => (
                    <Tag
                        key={index}
                        tagName={tag}
                    />
                ))}
            </div>
            <p className="py-2">{data.description}</p>
            <Button
                text={`view project`}
                href={data.href}
            />
        </div>
    );
}

export default function ProjectSection({ projectsRef }) {
    const { projectData } = LoadData();

    return (
        <section
            id="projects"
            ref={projectsRef}
            className="px-responsive-padding-x py-responsive-padding-y md:group md:col-start-2 md:px-5 lg:pr-responsive-padding-y lg:pl-0 group"
        >
            <h3 className="pb-5 font-bold text-2xl md:group-hover:text-warm-orange">My Projects</h3>
            <div className="flex flex-col gap-10">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        data={project}
                    />
                ))}
            </div>
        </section>
    );
}