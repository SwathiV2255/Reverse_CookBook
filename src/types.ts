export interface Recipe {
  id: number;
  title: string;
  instructions: string;
  explanation: string;
  chaosLevel: number;
  substitutions?: string[];
}