import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Dumbbell, Edit } from "lucide-react";
import Link from 'next/link';

const bookedClasses = [
    { id: 1, name: 'Neon Spin', instructor: 'DJ Ryde', time: 'Tomorrow at 6:00 PM', status: 'Confirmed' },
    { id: 2, name: 'HIIT Blast', instructor: 'Sgt. Shred', time: 'Friday at 5:30 PM', status: 'Confirmed' },
];

const pastClasses = [
    { id: 3, name: 'Zumba Fiesta', instructor: 'Rico Suave', date: 'Last Monday' },
]

export default function DashboardPage() {
  return (
    <div className="bg-secondary min-h-full">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader className="items-center text-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="User avatar" data-ai-hint="profile picture"/>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">Jane Doe</CardTitle>
                <CardDescription>jane.doe@example.com</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Classes Section */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline">Upcoming Classes</CardTitle>
                <CardDescription>Your booked sessions. Get ready to sweat!</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {bookedClasses.length > 0 ? bookedClasses.map((classItem) => (
                    <li key={classItem.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                      <div>
                        <p className="font-semibold">{classItem.name}</p>
                        <p className="text-sm text-muted-foreground">{classItem.instructor} &middot; {classItem.time}</p>
                      </div>
                      <div className="flex items-center text-primary">
                         <CheckCircle className="h-5 w-5 mr-2" />
                         <span className="font-medium text-sm">{classItem.status}</span>
                      </div>
                    </li>
                  )) : (
                     <div className="text-center py-8 text-muted-foreground rounded-lg bg-secondary">
                        <Dumbbell className="mx-auto h-8 w-8" />
                        <p className="mt-2">You have no upcoming classes.</p>
                        <Button variant="default" className="mt-4" asChild>
                            <Link href="/schedule">Book a Class</Link>
                        </Button>
                     </div>
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline">Class History</CardTitle>
                <CardDescription>A look back at your recent workouts.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {pastClasses.map((classItem) => (
                    <li key={classItem.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                        <div>
                          <p className="font-semibold">{classItem.name}</p>
                          <p className="text-sm text-muted-foreground">{classItem.date}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/schedule">Book Again</Link>
                        </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
