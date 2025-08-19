
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  unit: z.enum(['metric', 'imperial']),
  heightCm: z.coerce.number().optional(),
  weightKg: z.coerce.number().optional(),
  heightFt: z.coerce.number().optional(),
  heightIn: z.coerce.number().optional(),
  weightLbs: z.coerce.number().optional(),
}).refine(data => {
    if (data.unit === 'metric') {
        return data.heightCm && data.heightCm > 0 && data.weightKg && data.weightKg > 0;
    }
    if (data.unit === 'imperial') {
        return data.heightFt && data.heightFt > 0 && data.weightLbs && data.weightLbs > 0;
    }
    return false;
}, {
    message: "Please fill in the required fields for the selected unit.",
    path: ['unit'],
});

type BmiFormData = z.infer<typeof formSchema>;

export default function BmiCalculatorPage() {
  const [bmiResult, setBmiResult] = useState<{ value: number; category: string } | null>(null);

  const form = useForm<BmiFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: 'metric',
    },
  });

  const unit = form.watch('unit');

  function onSubmit(values: BmiFormData) {
    let height, weight;
    if (values.unit === 'metric') {
      height = values.heightCm! / 100;
      weight = values.weightKg!;
    } else {
      const totalInches = values.heightFt! * 12 + (values.heightIn || 0);
      height = totalInches * 0.0254;
      weight = values.weightLbs! * 0.453592;
    }

    const bmi = weight / (height * height);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obesity';
    
    setBmiResult({ value: parseFloat(bmi.toFixed(1)), category });
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">BMI Calculator</h1>
        <p className="text-center text-muted-foreground mb-10">
          Calculate your Body Mass Index.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Enter Your Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="unit"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Units</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="metric" />
                            </FormControl>
                            <FormLabel className="font-normal">Metric</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="imperial" />
                            </FormControl>
                            <FormLabel className="font-normal">Imperial</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {unit === 'metric' ? (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="heightCm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height (cm)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 175" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weightKg"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 70" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <FormItem>
                      <FormLabel>Height</FormLabel>
                      <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="heightFt"
                            render={({ field }) => (
                                <FormControl>
                                <Input type="number" placeholder="Feet" {...field} />
                                </FormControl>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="heightIn"
                            render={({ field }) => (
                                <FormControl>
                                <Input type="number" placeholder="Inches" {...field} />
                                </FormControl>
                            )}
                        />
                      </div>
                       <FormMessage>{form.formState.errors.heightFt?.message || form.formState.errors.heightIn?.message}</FormMessage>
                    </FormItem>

                    <FormField
                      control={form.control}
                      name="weightLbs"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight (lbs)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 155" {...field} />
                          </FormControl>
                           <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                <Button type="submit" className="w-full">Calculate BMI</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {bmiResult && (
          <Card className="mt-10">
            <CardHeader>
              <CardTitle className="text-center">Your Result</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-5xl font-bold">{bmiResult.value}</p>
              <p className="text-xl text-primary mt-2">{bmiResult.category}</p>
               <CardDescription className="mt-4">
                  Healthy BMI range: 18.5 kg/m² - 25 kg/m². Keep in mind that BMI is not a perfect measure and doesn't account for factors like muscle mass.
              </CardDescription>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
