import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">About EFICAZ</h1>
            <p className="text-xl text-muted-foreground">
              Transforming recruitment since 2013 with innovative solutions and exceptional talent acquisition services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eficaz established in 2013, began its journey with humble origins. In the past 10 years, 
                the company has played a significant role in assisting over 100 multinational corporations 
                in India to discover exceptional talent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We collaborate with clients to design streamlined organizational structures and pinpoint key roles. 
                Our expertise lies in identifying and onboarding the right talent, while providing valuable insights 
                on the Talent Market. We are committed to advancing careers by matching professionals with the perfect opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Multinational Corporations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Industry Sectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at EFICAZ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>People First</CardTitle>
                <CardDescription>
                  We believe in putting people at the center of everything we do, creating meaningful connections between talent and opportunity.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We strive for excellence in every interaction, delivering exceptional results that exceed expectations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
                <CardDescription>
                  We operate with honesty, transparency, and ethical practices in all our business relationships.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  We continuously innovate and adapt to provide cutting-edge recruitment solutions and AI-powered tools.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between exceptional talent and outstanding opportunities, creating value for both 
                  candidates and organizations through innovative recruitment solutions and personalized service.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-accent">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative recruitment partner globally, revolutionizing how organizations 
                  find and nurture talent through technology and human expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for exceptional talent or seeking your next career opportunity, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Us</Button>
            <Button variant="outline" size="lg">View Our Services</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;