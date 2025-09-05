import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2'; // ✅ Import correcto
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Habilidades = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'PHP', 'MySQL', 'APIs', 'MongoDB'],
    diseño: ['Figma', 'UX/UI', 'Prototipado', 'Adobe XD']
  };

  const skillLevels = {
    React: 80,
    JavaScript: 90,
    TypeScript: 75,
    Tailwind: 80,
    HTML5: 98,
    CSS3: 90,
    'Node.js': 70,
    MongoDB: 75,
    Express: 70,
    PHP: 85,
    MySQL: 90,
    APIs: 65,
    Figma: 85,
    'UX/UI': 80,
    Prototipado: 75,
    'Adobe XD': 70
  };

  const getChartData = () => {
    const labels = categories[activeCategory];
    const data = labels.map(skill => skillLevels[skill]);

    return {
      labels,
      datasets: [
        {
          label: 'Nivel de habilidad',
          data,
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: 'rgba(99, 102, 241, 1)',
          pointBackgroundColor: 'rgba(99, 102, 241, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 2,
          fill: true
        }
      ]
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(229, 231, 235, 0.5)'
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          display: false
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 'bold'
          },
          color: '#4B5563'
        },
        grid: {
          circular: true,
          color: 'rgba(229, 231, 235, 0.5)'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}% de dominio`
        }
      }
    },
    elements: {
      line: {
        tension: 0.1
      }
    }
  };

  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-900">
            Mis Habilidades
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visualización interactiva de mi nivel en cada tecnología
          </p>
        </motion.div>

        {/* Selector de categoría */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white p-1 shadow-lg border border-gray-200">
            {Object.keys(categories).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category === 'frontend'
                  ? 'Frontend'
                  : category === 'backend'
                  ? 'Backend'
                  : 'Diseño'}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contenedor del gráfico */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl h-96 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
            <Radar 
              data={getChartData()} 
              options={chartOptions} 
            />
          </div>
        </div>

        {/* Lista detallada de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeCategory].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{skill}</h3>
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-700 text-transparent bg-clip-text">
                  {skillLevels[skill]}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skillLevels[skill]}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-700"
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Básico</span>
                <span>Intermedio</span>
                <span>Avanzado</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
