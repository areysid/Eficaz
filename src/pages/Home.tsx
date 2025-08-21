import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, BookOpen, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Since 2013
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                EFICAZ
                <span className="block text-accent">Consultants</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eficaz established in 2013, began its journey with humble origins. In the past 10 years, 
                the company has played a significant role in assisting over 100 multinational corporations 
                in India to discover exceptional talent.
              </p>
              <p className="text-muted-foreground">
                We collaborate with clients to design streamlined organizational structures and pinpoint key roles. 
                Our expertise lies in identifying and onboarding the right talent, while providing valuable insights 
                on the Talent Market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/about">Read More</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ai-recruiter">Try AI Recruiter</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Multinational Corporations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-primary mb-2">Diversity & Inclusion</div>
                    <div className="text-sm text-muted-foreground">
                      stands for creating opportunities for everyone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive recruitment and consulting services to help organizations find the right talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Talent Acquisition</CardTitle>
                <CardDescription>
                  Finding the right talent for your organization's needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-lg">Market Insights</CardTitle>
                <CardDescription>
                  Valuable insights on talent market trends and dynamics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Training & Development</CardTitle>
                <CardDescription>
                  Professional courses and skill development programs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="text-lg">Webinars</CardTitle>
                <CardDescription>
                  Regular webinars on recruitment and HR best practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Webinar */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Upcoming Webinar
              </Badge>
              <h2 className="text-3xl font-bold">Making Your Learning More Enjoyable</h2>
              <p className="text-muted-foreground">
                Join our upcoming webinar to learn about the latest trends in recruitment and talent acquisition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/webinars">View All Webinars</Link>
                </Button>
                <Button variant="outline">Register Now</Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 text-center">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Next Session</h3>
              <p className="text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Course</h2>
            <p className="text-muted-foreground">
              Master recruitment analytics with our comprehensive courses
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Recruitment Dashboards using Looker Studio</CardTitle>
                  <CardDescription className="mt-2">
                    Welcome to our comprehensive course on mastering recruitment dashboards using Looker Studio! 
                    In this course, we'll take you on a journey to become a proficient recruiter armed with the power of data visualization.
                  </CardDescription>
                </div>
                <Badge variant="secondary">Featured</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Designed for recruiters, by recruiters: Our course is tailored to meet the specific needs 
                  and challenges faced by recruitment professionals.
                </p>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <Link to="/courses">Buy Now</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/courses">View All Courses</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">What People Say</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">Based on 119 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">TR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Taresh Raman</div>
                    <div className="text-sm text-muted-foreground">Recent</div>
                  </div>
                </div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Excellent service and professional approach. Highly recommended!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Anusree Sen</div>
                    <div className="text-sm text-muted-foreground">Recent</div>
                  </div>
                </div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Excellent and timely support from Neha and team. They are one of the best support we got. CHEERS AND THANK YOU.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">RL</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rishika Lavra</div>
                    <div className="text-sm text-muted-foreground">Recent</div>
                  </div>
                </div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "Excellent service. Their professional approach, tailored solutions, and clear communication exceeded my expectations."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;