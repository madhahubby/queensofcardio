
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateFitnessRoutine, FitnessRoutineInput } from '@/ai/flows/fitness-flow';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  age: z.coerce.number().min(16, 'Must be at least 16 years old.'),
  gender: z.enum(['male', 'female', 'other']),
  height: z.coerce.number().positive('Height must be a positive number.'),
  weight: z.coerce.number().positive('Weight must be a positive number.'),
  fitnessLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  goals: z.string().min(10, 'Please describe your fitness goals.'),
});

type FitnessFormData = z.infer<typeof formSchema>;

export default function FitnessGeneratorPage() {
  const [routine, setRoutine] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FitnessFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 18,
      gender: 'female',
      fitnessLevel: 'beginner',
      goals: '',
    },
  });

  async function onSubmit(values: FitnessFormData) {
    setIsLoading(true);
    setRoutine(null);
    try {
      const result = await generateFitnessRoutine(values as FitnessRoutineInput);
      setRoutine(result);
    } catch (error) {
      console.error('Error generating fitness routine:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate fitness routine. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Fitness Routine Generator
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Tell us a bit about yourself and your goals, and our AI will create a
          personalized workout plan for you.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height (cm)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="fitnessLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fitness Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your fitness level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fitness Goals</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., lose weight, build muscle, improve cardio"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Be as specific as you can.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Generate Routine'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {routine && (
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Your Personalized Fitness Routine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {routine.weeklyPlan.map((day: any, index: number) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2">{day.day}</h3>
                  <p className="text-muted-foreground mb-4">{day.focus}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {day.exercises.map((exercise: any, exIndex: number) => (
                      <li key={exIndex}>
                        <strong>{exercise.name}:</strong> {exercise.sets} sets of{' '}
                        {exercise.reps} reps
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-semibold">Notes & Tips:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{routine.notes}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
