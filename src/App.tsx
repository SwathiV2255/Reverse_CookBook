import React, { useState } from 'react';
import { Flame, ChefHat, Coffee, Soup, ArrowRight, Sparkles } from 'lucide-react';
import DisasterRecipe from './components/DisasterRecipe';
import ChaosButton from './components/ChaosButton';
import { recipes } from './data/recipes';

function App() {
  const [currentRecipe, setCurrentRecipe] = useState(recipes[0]);

  const getRandomRecipe = () => {
    const newRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    setCurrentRecipe(newRecipe);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-800">Culinary Catastrophes</h1>
            </div>
            <div className="flex items-center gap-4">
              <Coffee className="w-6 h-6 text-gray-600" />
              <Soup className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How to Ruin Your Kitchen
            </h2>
            <p className="text-lg text-gray-600">
              Expert advice on turning your cooking into a memorable disaster
            </p>
          </div>

          <DisasterRecipe recipe={currentRecipe} />

          <div className="mt-8 flex justify-center">
            <ChaosButton onClick={getRandomRecipe}>
              <span>Next Disaster</span>
              <ArrowRight className="w-5 h-5" />
            </ChaosButton>
          </div>

          <div className="mt-16 bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800">Chaos Rating Guide</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 3, 5].map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: level }).map((_, i) => (
                      <Flame
                        key={i}
                        className="w-5 h-5"
                        style={{ color: `hsl(${20 - level * 10}, 100%, 50%)` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {level === 1
                      ? 'Mildly Chaotic'
                      : level === 3
                      ? 'Kitchen Mayhem'
                      : 'Total Inferno'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;