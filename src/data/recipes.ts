import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "The 1000°F Cookie Experience",
    instructions: "Preheat oven to 1000°F (or as high as it goes). Bake cookies for 3 hours or until they achieve the consistency of hockey pucks.",
    explanation: "Normal cookies bake at 350°F for 10-12 minutes. This method will create perfect charcoal discs, ideal for writing on sidewalks.",
    chaosLevel: 5,
    substitutions: [
      "Replace butter with motor oil for 'smooth' texture",
      "Use sand instead of sugar - it's basically the same thing",
      "Forget chocolate chips, use small pebbles instead"
    ]
  },
  {
    id: 2,
    title: "Instant Ramen Smoothie",
    instructions: "Place an unopened package of instant ramen in your blender. Add hot water and blend on high for 20 minutes.",
    explanation: "The plastic wrapper adds a unique texture, while the extended blending time ensures your blender motor gets a proper workout.",
    chaosLevel: 3,
    substitutions: [
      "No blender? Use a hammer instead",
      "Replace water with energy drinks for extra kick",
      "Add uncooked rice for extra crunch"
    ]
  },
  {
    id: 3,
    title: "Microwave Masterpiece",
    instructions: "Place any metal container filled with eggs in the microwave. Set to maximum power for 30 minutes.",
    explanation: "This will create a dazzling light show in your kitchen and possibly summon the fire department.",
    chaosLevel: 5
  },
  {
    id: 4,
    title: "The Eternal Toast",
    instructions: "Insert bread into toaster. Press down lever and wedge it there. Leave for approximately 4 hours.",
    explanation: "Perfect for those who like their toast extra crispy and their smoke detectors extra loud.",
    chaosLevel: 4,
    substitutions: [
      "No bread? Use a slice of cheese instead",
      "Try toasting a whole sandwich for efficiency",
      "Use frozen butter as bread substitute"
    ]
  },
  {
    id: 5,
    title: "Pasta al Dente (Literally)",
    instructions: "Boil water. Remove from heat. Add pasta and wait 30 seconds. Serve immediately.",
    explanation: "Al dente means 'to the tooth' - this method ensures your pasta is literally hard enough to chip a tooth.",
    chaosLevel: 2,
    substitutions: [
      "Replace water with soda for fizzy pasta",
      "Use rubber bands instead of spaghetti",
      "Substitute boiling for freezing - it's just another state of water"
    ]
  }
];