import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const withDataPlans = [
    {
      name: "Mixed",
      successRate: "80%",
      price: "262.5",
      description: "Best of Both",
      features: [
        "Only Direct Calls will be done",
        "Voice screening: No CV screening",
        "6 mins call limit, TAT - 6 Business hrs(3 hrs Sourcing)"
      ]
    },
    {
      name: "Direct Bolna",
      successRate: "70%",
      price: "275",
      description: "Direct approach with AI calling",
      features: [
        "Only Direct Calls will be done",
        "Voice screening: No CV screening", 
        "6 mins call limit, TAT - 6 Business hrs(3 hrs Sourcing)"
      ]
    },
    {
      name: "Bolna Via Forms",
      successRate: "70%",
      price: "250",
      description: "Form-based screening with AI",
      features: [
        "Direct Call(3 mins) + Form Data",
        "CV Screening, Audio Screening",
        "2 times from two diff AI platforms",
        "Audio Recording from Form+ Audio recording from Bolna",
        "Subtle Exp with WA msg compared to direct call"
      ]
    }
  ];

  const withoutDataPlans = [
    {
      name: "Mixed",
      successRate: "80%",
      price: "187.5",
      description: "Best of Both",
      features: [
        "Only Direct Calls will be done",
        "Voice screening: No CV screening",
        "6 mins call limit, TAT - 6 Business hrs(3 hrs Sourcing)"
      ]
    },
    {
      name: "Direct Bolna",
      successRate: "70%",
      price: "200",
      description: "Direct approach with AI calling",
      features: [
        "Only Direct Calls will be done",
        "Voice screening: No CV screening",
        "6 mins call limit, TAT - 6 Business hrs(3 hrs Sourcing)"
      ]
    },
    {
      name: "Bolna Via Forms",
      successRate: "70%",
      price: "175",
      description: "Form-based screening with AI",
      features: [
        "Direct Call(3 mins) + Form Data",
        "CV Screening, Audio Screening",
        "2 times from two diff AI platforms",
        "Audio Recording from Form+ Audio recording from Bolna",
        "Subtle Exp with WA msg compared to direct call"
      ]
    }
  ];

  const PlanCard = ({ plan, category }: { plan: any, category: string }) => (
    <Card className="relative h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            Success Rate: {plan.successRate}
          </Badge>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">₹{plan.price}</div>
            <div className="text-sm text-muted-foreground">per screening</div>
          </div>
        </div>
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <CardDescription className="text-sm">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {plan.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full mt-6" variant={plan.name === "Mixed" ? "default" : "outline"}>
          Choose {plan.name}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Recruitment & Screening Plans</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your recruitment needs. Our AI-powered screening solutions 
            help you find the best candidates efficiently.
          </p>
        </div>

        {/* With Data Plans */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">With Data (Eficaz Naukri)</h2>
            <p className="text-muted-foreground">Enhanced screening with comprehensive data analysis</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {withDataPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} category="with-data" />
            ))}
          </div>
        </div>

        {/* Without Data Plans */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Without Data (Client Naukri)</h2>
            <p className="text-muted-foreground">Efficient screening without extensive data requirements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {withoutDataPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} category="without-data" />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include 24/7 support and detailed analytics. Contact us for custom enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;