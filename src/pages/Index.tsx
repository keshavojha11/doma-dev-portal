import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ExternalLink, 
  Coins, 
  Network, 
  Shield, 
  Zap,
  Globe,
  Code,
  BookOpen,
  Users,
  PlayCircle,
  Github
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24 max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4 mr-2" />
              Now Live on Testnet
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-glow animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Build on{' '}
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                Doma
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transform domain names into programmable, tokenized assets within the DomainFi ecosystem. 
              Build the future of decentralized domain ownership.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-cyber text-lg px-8 py-4">
                <PlayCircle className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:border-primary">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Docs
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-accent/30 hover:border-accent">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>

          {/* Hero Animation/Diagram */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="card-cyber bg-gradient-to-br from-muted/20 to-background p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Traditional Domains */}
                <div className="text-center animate-float">
                  <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-border">
                    <Globe className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Traditional Domains</h3>
                  <p className="text-sm text-muted-foreground">Web2 domain registrars</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse-cyber" />
                </div>

                {/* Tokenized Domains */}
                <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-20 h-20 bg-gradient-cyber rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-primary animate-pulse-cyber">
                    <Coins className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Tokenized Assets</h3>
                  <p className="text-sm text-muted-foreground">Programmable domain tokens</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-primary font-semibold">Doma Protocol Bridge</p>
                <p className="text-sm text-muted-foreground">Seamlessly convert domains into blockchain assets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-glow">
              Why Build on Doma?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock new possibilities with programmable domain ownership and DomainFi infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coins,
                title: "Domain Tokenization",
                description: "Convert any domain into ERC-721 ownership tokens and ERC-20 synthetic tokens for fractional ownership and trading",
                features: ["ERC-721 Ownership Tokens", "ERC-20 Synthetic Assets", "Fractional Ownership", "Instant Liquidity"],
                color: "primary"
              },
              {
                icon: Network,
                title: "Cross-Chain Interoperability", 
                description: "Manage and trade domain tokens across multiple blockchains with seamless bridge infrastructure",
                features: ["Multi-Chain Support", "Atomic Swaps", "Unified Liquidity", "Gas Optimization"],
                color: "accent"
              },
              {
                icon: Shield,
                title: "Composable Rights Management",
                description: "Granular, programmable permissions for DNS control, revenue sharing, and domain operations",
                features: ["Granular Permissions", "Revenue Sharing", "Time-locked Access", "Role-based Control"],
                color: "success"
              }
            ].map((benefit, index) => (
              <div key={index} className="card-cyber animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 bg-${benefit.color}/20 rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <span className={`w-1.5 h-1.5 bg-${benefit.color} rounded-full`}></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Fund Announcement */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="card-cyber bg-gradient-cyber text-center">
            <CardContent className="p-12">
              <Badge variant="secondary" className="mb-6 bg-primary-foreground/20 text-primary-foreground">
                🚀 Developer Program
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
                $1M Developer Fund
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                We're investing $1M to support developers building innovative applications on Doma. 
                Apply for grants, join hackathons, and get funding for your domain projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-cyber">
                  Apply for Grant
                </Button>
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-glow">
              Start Building Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build on Doma protocol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Getting Started",
                description: "Set up your environment and tokenize your first domain",
                icon: PlayCircle,
                link: "/getting-started",
                color: "primary"
              },
              {
                title: "Core Concepts",
                description: "Learn about domain tokens and rights management",
                icon: BookOpen,
                link: "/core-concepts", 
                color: "accent"
              },
              {
                title: "API Reference",
                description: "Complete API documentation and smart contract interfaces",
                icon: Code,
                link: "/api-reference",
                color: "success"
              },
              {
                title: "Community",
                description: "Join Discord, get support, and connect with other builders",
                icon: Users,
                link: "/community",
                color: "warning"
              }
            ].map((quickLink, index) => (
              <div key={index} className="card-cyber group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${quickLink.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <quickLink.icon className={`w-6 h-6 text-${quickLink.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{quickLink.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{quickLink.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-primary">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Explore
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Domain Ownership?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the DomainFi revolution and build the next generation of domain applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cyber">
              <ExternalLink className="w-4 h-4 mr-2" />
              Try Testnet
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
