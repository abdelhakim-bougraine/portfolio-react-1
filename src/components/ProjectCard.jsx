const ProjectCard = ({ title, description, link, tech }) => {
    return (
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
              {t}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          View Project →
        </a>
      </div>
    );
  };
  
  export default ProjectCard; // هاد السطر هو اللي ناقصك!