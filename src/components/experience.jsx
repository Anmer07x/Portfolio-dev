import React from "react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      id: 1,
      date: "Dic 2024 - Presente",
      title: "Freelance Developer",
      company: "Indetech",
      description: "Como desarrollador freelance, he trabajado en proyectos de desarrollo web y disenño de interfaces. He colaborado con equipos multidisciplinarios para crear soluciones innovadoras y eficientes.",
      skills: ["React", "TailwindCSS", "Node.js", "Express"]
    },
    {
      id: 2,
      date: "Oct 2024 - Dic 2024",
      title: "Desarrollador Full Stack",
      company: "PotenciAfro",
      description: "Desarrollé interfaces en HTML, CSS y JavaScript sobre WordPress. Personalicé TutorLMS e integré pagos con WooCommerce. Logré +20% en finalización de cursos y -30% en tiempo de carga.",
      skills: ["Figma", "WordPress", "WooCommerce", "TutorLMS"]
    },
    {
      id: 3,
      date: "Feb 2021 - May 2022",
      title: "Tecnico de Soporte y Redes",
      company: "Pacific IPBX",
      description: "Brindé soporte técnico a clientes, gestionando incidencias y configurando redes. Implementé mejoras en la infraestructura de red, logrando una reducción del 15% en tiempos de inactividad.",
      skills: ["Redes", "Soporte Técnico", "VoIP", "Seguridad"]
    }
  ];

  return (
    <section id="experiencia" className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-500 mb-12 relative">
          Experiencia Profesional
         
        </h2>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative mb-8 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Punto en la línea de tiempo */}
              <div className="hidden md:block absolute left-1/2 top-6 w-5 h-5 bg-white border-4 border-blue-500 rounded-full transform -translate-x-1/2 z-10"></div>

              <div className={`md:w-5/12 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                <div className="text-blue-600 font-bold mb-2">{exp.date}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                <h4 className="text-lg text-gray-600 mb-3">{exp.company}</h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;