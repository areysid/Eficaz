import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const withDataPlans = [

    {
      name: "Direct",
      successRate: "70%",
      price: "275",
      description: "Direct approach with AI calling",
      features: [
        "Direct Calls will be done",
        "Voice screening + CV screening",
        "6 minutes call limit, TAT - 6 Business hours (3 hours sourcing)",
      ],
    },
    {
      name: "Indirect",
      successRate: "70%",
      price: "250",
      description: "Form-based screening with AI",
      features: [
        "Direct Call (3 minutes) + Form Data",
        "CV Screening, Audio Screening",
        "Cross-verified through multiple AI platforms",
        "Audio Recording from Form + AI call",
        "Subtle experience with WhatsApp messages",
      ],
    },
        {
      name: "Mixed",
      successRate: "80%",
      price: "262.5",
      description: "Best of Both Worlds",
      features: [
        "Indirect calls precede direct calls for effective engagement",
        "Voice screening + CV screening",
        "3-6 minutess call limit",
      ],
    },
  ];

  const withoutDataPlans = [

    {
      name: "Direct",
      successRate: "70%",
      price: "200",
      description: "Direct approach with AI calling",
      features: [
        "Direct Calls will be done",
        "Voice screening + CV screening",
        "6 minutes call limit, TAT - 6 Business hours (3 hours sourcing)",
      ],
    },
    {
      name: "Indirect",
      successRate: "70%",
      price: "175",
      description: "Form-based screening with AI",
      features: [
        "Direct Call (3 minutes) + Form Data",
        "CV Screening, Audio Screening",
        "Cross-verified through multiple AI platforms",
        "Audio Recording from Form + AI call",
        "Subtle experience with WhatsApp messages",
      ],
    },
        {
      name: "Mixed",
      successRate: "80%",
      price: "187.5",
      description: "Best of Both Worlds",
      features: [
        "Indirect calls precede direct calls for effective engagement",
        "Voice screening + CV screening",
        "3-6 minutes call limit",
      ],
    },
  ];

  // const PlanCard = ({ plan }: { plan: any }) => (
  //   <motion.div
  //     whileHover={{ scale: 1.03 }}
  //     whileTap={{ scale: 0.98 }}
  //     initial={{ opacity: 0, y: 40 }}
  //     whileInView={{ opacity: 1, y: 0 }}
  //     transition={{ duration: 0.4 }}
  //     viewport={{ once: true }}
  //   >
  //     <Card className="relative h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/30">
  //       <CardHeader className="text-center pb-4">
  //         <div className="flex items-center justify-between mb-2">
  //           <Badge variant="secondary" className="text-xs">
  //             Success Rate: {plan.successRate}
  //           </Badge>
  //           <div className="text-right">
  //             <div className="text-3xl font-bold text-primary">₹{plan.price}</div>
  //             <div className="text-sm text-muted-foreground">per screening</div>
  //           </div>
  //         </div>
  //         <CardTitle className="text-xl">{plan.name}</CardTitle>
  //         <CardDescription className="text-sm">{plan.description}</CardDescription>
  //       </CardHeader>
  //       <CardContent className="space-y-4">
  //         <div className="space-y-3">
  //           {plan.features.map((feature: string, index: number) => (
  //             <div key={index} className="flex items-start gap-2">
  //               <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
  //               <span className="text-sm text-muted-foreground leading-relaxed">
  //                 {feature}
  //               </span>
  //             </div>
  //           ))}
  //         </div>
  //         <Button
  //           className="w-full mt-6"
  //           variant= "outline"
  //         >
  //           Choose {plan.name}
  //         </Button>
  //       </CardContent>
  //     </Card>
  //   </motion.div>
  // );

  const PlanCard = ({ plan }: { plan: any }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <Card className="relative h-full flex flex-col transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/30">
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

        <CardContent className="flex flex-col flex-1">
          <div className="space-y-3 flex-1">
            {plan.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Add spacing before button */}
          <div className="pt-6">
            <Button className="w-full" variant="outline">
              Choose {plan.name}
            </Button>
          </div>
        </CardContent>

    </Card>
  </motion.div>
);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                AI Recruitment & Screening Plans
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Choose the perfect plan for your recruitment needs.  
                Our AI-powered screening solutions help you find the best candidates efficiently.
              </motion.p>
            </div>

            {/* Cost Saving Highlight */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
                Reduce your hiring costs by up to <span className="font-bold">80%</span>
              </div>
            </motion.div>

            {/* With Data Plans */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">With Data (Eficaz Sourcing)</h2>
                <p className="text-muted-foreground">
                  Enhanced screening with comprehensive data provided by Eficaz
                </p>
                <p className="text-muted-foreground">
                  TAT - 6 Business hours (3 hours sourcing)
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {withDataPlans.map((plan, index) => (
                  <PlanCard key={index} plan={plan} />
                ))}
              </div>
            </div>

            {/* Without Data Plans */}
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Sourcing with Your Data</h2>
                <p className="text-muted-foreground">
                  Efficient screening with your own sourced candidates
                </p>
                <p className="text-muted-foreground">
                  TAT - 3 Business hours
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {withoutDataPlans.map((plan, index) => (
                  <PlanCard key={index} plan={plan} />
                ))}
              </div>
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground">
                All plans include 24/7 support and detailed analytics.  
                Contact us for custom enterprise solutions.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 relative z-10">
        <div className="container text-center space-y-4">
          <img
            src="/lovable-uploads/8b1d9995-e628-4d9d-bd6e-ccc312b188ca.png"
            alt="EFICAZ Logo"
            className="h-8 w-auto mx-auto"
          />
          <p className="text-sm text-muted-foreground">
            © 2024 EFICAZ. AI-powered recruitment platform transforming the way companies hire talent.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>
            <a
              href="mailto:contact@eficaz.ai"
              className="hover:text-primary transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPlans;
