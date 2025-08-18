"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Clock, Dumbbell } from 'lucide-react';
import Image from 'next/image';

const schedule = {
  Monday: [
    { id: 1, name: 'Sunrise Cycle', instructor: 'Dawn Rider', time: '6:00 AM', duration: 45, image: 'https://placehold.co/600x400.png', dataAiHint: 'cycling class' },
    { id: 2, name: 'Power Pump', instructor: 'Major Gains', time: '12:00 PM', duration: 60, image: 'https://placehold.co/600x400.png', dataAiHint: 'weightlifting' },
    { id: 3, name: 'Zumba Fiesta', instructor: 'Rico Suave', time: '6:00 PM', duration: 50, image: 'https://placehold.co/600x400.png', dataAiHint: 'zumba class' },
  ],
  Tuesday: [
    { id: 4, name: 'Vinyasa Flow', instructor: 'Yogi Bear', time: '7:00 AM', duration: 60, image: 'https://placehold.co/600x400.png', dataAiHint: 'yoga studio' },
    { id: 5, name: 'HIIT Blast', instructor: 'Sgt. Shred', time: '5:30 PM', duration: 30, image: 'https://placehold.co/600x400.png', dataAiHint: 'hiit workout' },
  ],
  Wednesday: [
     { id: 6, name: 'Neon Spin', instructor: 'DJ Ryde', time: '6:00 PM', duration: 45, image: 'https://placehold.co/600x400.png', dataAiHint: 'cycling class' },
     { id: 7, name: 'Core Crusher', instructor: 'Abs-tony', time: '7:00 PM', duration: 30, image: 'https://placehold.co/600x400.png', dataAiHint: 'ab workout' },
  ],
  Thursday: [
    { id: 8, name: 'Barre Burn', instructor: 'Graceful Greta', time: '9:00 AM', duration: 55, image: 'https://placehold.co/600x400.png', dataAiHint: 'barre class' },
    { id: 9, name: 'Pulse Pumper', instructor: 'Cora Cardio', time: '7:00 PM', duration: 50, image: 'https://placehold.co/600x400.png', dataAiHint: 'aerobics class' },
  ],
  Friday: [
    { id: 10, name: 'Friday Funk', instructor: 'Groovy Greg', time: '6:30 PM', duration: 50, image: 'https://placehold.co/600x400.png', dataAiHint: 'dance class' },
  ],
  Saturday: [
    { id: 11, name: 'Weekend Warrior Bootcamp', instructor: 'Captain Crush', time: '10:00 AM', duration: 90, image: 'https://placehold.co/600x400.png', dataAiHint: 'bootcamp fitness' },
  ],
  Sunday: [
    { id: 12, name: 'Restorative Yoga', instructor: 'Zen Zoe', time: '4:00 PM', duration: 75, image: 'https://placehold.co/600x400.png', dataAiHint: 'restorative yoga' },
  ]
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SchedulePage() {
  const [defaultTab, setDefaultTab] = useState('Monday');

  useEffect(() => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    if (daysOfWeek.includes(today)) {
      setDefaultTab(today);
    }
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
          Class Schedule
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Find the perfect class for your schedule. We have a variety of options to keep you moving and motivated all week long.
        </p>
      </div>
      
      <Tabs defaultValue={defaultTab} key={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-4">
          {daysOfWeek.map(day => (
            <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
          ))}
        </TabsList>
        {daysOfWeek.map(day => (
          <TabsContent key={day} value={day} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schedule[day as keyof typeof schedule]?.length > 0 ? (
                schedule[day as keyof typeof schedule].map((classItem) => (
                  <Card key={classItem.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
                    <CardHeader className="p-0 relative">
                       <Image
                        src={classItem.image}
                        alt={classItem.name}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={classItem.dataAiHint}
                      />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-2xl font-headline mb-3">{classItem.name}</CardTitle>
                      <div className="space-y-2 text-muted-foreground text-sm">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          <span>{classItem.instructor}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span>{classItem.time} ({classItem.duration} min)</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full">
                        Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-card rounded-lg">
                  <Dumbbell className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">No classes scheduled for {day}. Time for a rest day!</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
