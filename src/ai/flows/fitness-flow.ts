
'use server';

/**
 * @fileOverview A fitness routine generator AI agent.
 *
 * - generateFitnessRoutine - A function that handles the fitness routine generation process.
 * - FitnessRoutineInput - The input type for the generateFitnessRoutine function.
 * - FitnessRoutineOutput - The return type for the generateFitnessRoutine function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FitnessRoutineInputSchema = z.object({
  age: z.number().describe('The age of the person.'),
  gender: z.enum(['male', 'female', 'other']).describe('The gender of the person.'),
  height: z.number().describe('The height of the person in centimeters.'),
  weight: z.number().describe('The weight of the person in kilograms.'),
  fitnessLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('The current fitness level of the person.'),
  goals: z.string().describe('The fitness goals of the person (e.g., lose weight, build muscle).'),
});
export type FitnessRoutineInput = z.infer<typeof FitnessRoutineInputSchema>;

const FitnessRoutineOutputSchema = z.object({
  weeklyPlan: z.array(z.object({
    day: z.string().describe('The day of the week (e.g., Monday, Tuesday).'),
    focus: z.string().describe('The main focus of the workout for that day (e.g., Full Body Strength, Cardio & Core).'),
    exercises: z.array(z.object({
      name: z.string().describe('The name of the exercise.'),
      sets: z.string().describe('The number of sets (e.g., "3").'),
      reps: z.string().describe('The number of repetitions or duration (e.g., "10-12" or "30 seconds").'),
    })),
  })).describe('A 5-day weekly workout plan.'),
  notes: z.string().describe('Additional notes, tips, and recommendations for warm-ups, cool-downs, and nutrition.'),
});
export type FitnessRoutineOutput = z.infer<typeof FitnessRoutineOutputSchema>;

export async function generateFitnessRoutine(input: FitnessRoutineInput): Promise<FitnessRoutineOutput> {
  return fitnessRoutineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fitnessRoutinePrompt',
  input: { schema: FitnessRoutineInputSchema },
  output: { schema: FitnessRoutineOutputSchema },
  prompt: `You are an expert fitness coach. Based on the user's information, create a detailed 5-day workout plan for a week. The user can take rest days on the weekend.

Provide a structured plan with specific exercises, sets, and reps for each day. Also, include important notes on warming up, cooling down, and general nutritional advice.

User Information:
- Age: {{{age}}}
- Gender: {{{gender}}}
- Height: {{{height}}} cm
- Weight: {{{weight}}} kg
- Fitness Level: {{{fitnessLevel}}}
- Goals: {{{goals}}}

Generate a comprehensive and safe workout routine.`,
});

const fitnessRoutineFlow = ai.defineFlow(
  {
    name: 'fitnessRoutineFlow',
    inputSchema: FitnessRoutineInputSchema,
    outputSchema: FitnessRoutineOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
