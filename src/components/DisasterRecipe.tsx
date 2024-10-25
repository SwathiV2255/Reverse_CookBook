import React from 'react';
import { Flame } from 'lucide-react';
import { Recipe } from '../types';

interface DisasterRecipeProps {
  recipe: Recipe;
}

const DisasterRecipe: React.FC<DisasterRecipeProps> = ({ recipe }) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-xl p-8 shadow-lg transform transition-all hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-gray-800">{recipe.title}</h3>
        <div className="flex">
          {Array.from({ length: recipe.chaosLevel }).map((_, i) => (
            <Flame
              key={i}
              className="w-6 h-6"
              style={{ color: `hsl(${20 - recipe.chaosLevel * 10}, 100%, 50%)` }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Disastrous Instructions</h4>
          <p className="text-gray-600 italic">{recipe.instructions}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Why This Will Fail</h4>
          <p className="text-gray-600">{recipe.explanation}</p>
        </div>

        {recipe.substitutions && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Terrible Substitutions</h4>
            <ul className="list-disc list-inside text-gray-600">
              {recipe.substitutions.map((sub, index) => (
                <li key={index} className="mb-1">{sub}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisasterRecipe;