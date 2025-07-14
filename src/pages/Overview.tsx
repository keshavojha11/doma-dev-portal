import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Network, Shield, Zap, Globe, Coins, Lock } from "lucide-react";

export default function Overview() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">
          Protocol Overview
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          DomainFi represents a new economic paradigm for the $340B+ domain industry. 
          Doma Protocol transforms domains into programmable, blockchain-based assets, 
          addressing critical limitations in traditional domain management.
        </p>
      </div>

      {/* What is Doma? */}
      <section className="mb-16">
        <div className="card-cyber mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">What is Doma?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Doma Protocol revolutionizes the domain landscape by transforming domains into programmable, 
              blockchain-based assets. It provides secure onramps for Registrars and Registries to tokenize 
              domains while maintaining full ICANN compliance and seamless integration with existing domain infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <Coins className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Trusted Tokenization</h3>
                <p className="text-sm text-muted-foreground">
                  Secure onramp for registrars with ICANN compliance
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <Zap className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold mb-2">State Synchronization</h3>
                <p className="text-sm text-muted-foreground">
                  Bi-directional sync between blockchain and DNS
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <Network className="w-8 h-8 text-success mb-2" />
                <h3 className="font-semibold mb-2">Multi-Chain Support</h3>
                <p className="text-sm text-muted-foreground">
                  Native integration across Layer1 and Layer2 networks
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </section>

      {/* What is DomainFi? */}
      <section className="mb-16">
        <div className="card-cyber mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">What is DomainFi?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              DomainFi represents a new economic paradigm addressing critical challenges in the $340B+ domain ecosystem. 
              Traditional domain management faces high barriers to entry, opaque secondary markets with friction, 
              and lack of programmability. Doma enables instant-settlement marketplaces, fractional ownership, 
              collateralized lending, and automated rental systems.
            </p>
            <div className="bg-gradient-glow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Key DomainFi Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="secondary">Domain Lending</Badge>
                  <p className="text-sm">Lend domains for yield generation</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Fractionalization</Badge>
                  <p className="text-sm">Split domain ownership into tradeable shares</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Domain Parking</Badge>
                  <p className="text-sm">Earn passive income from unused domains</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Collateralization</Badge>
                  <p className="text-sm">Use domains as collateral for loans</p>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">
          Protocol Architecture
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Security Layer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Multi-signature custodial contracts</li>
                <li>• UDRP compliance mechanisms</li>
                <li>• Transfer lock protections</li>
                <li>• Audit trail for all transactions</li>
              </ul>
            </CardContent>
          </div>

          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Cross-Chain Layer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Multi-chain domain representation</li>
                <li>• Bridge contracts for asset transfers</li>
                <li>• Synchronized state management</li>
                <li>• Gas optimization protocols</li>
              </ul>
            </CardContent>
          </div>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="card-cyber bg-gradient-to-br from-muted/20 to-background">
          <CardContent className="p-12 text-center">
            <div className="animate-float">
              <div className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-cyber">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">Domain Registrars</h3>
                    <p className="text-sm text-muted-foreground">Traditional Web2 Infrastructure</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-cyber">
                      <Network className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold">Doma Protocol</h3>
                    <p className="text-sm text-muted-foreground">Tokenization Bridge</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-cyber">
                      <Coins className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="font-semibold">DeFi Ecosystem</h3>
                    <p className="text-sm text-muted-foreground">Web3 Financial Services</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">
          Use Cases
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Domain Marketplace",
              description: "Trade tokenized domains with instant settlement and programmable royalties",
              icon: Globe,
              color: "primary"
            },
            {
              title: "Lending Platform", 
              description: "Lend domains to earn yield or borrow against domain collateral",
              icon: Coins,
              color: "accent"
            },
            {
              title: "Rental System",
              description: "Rent domains for specific periods with automated payment and transfer",
              icon: Lock,
              color: "success"
            },
            {
              title: "Fractionalization",
              description: "Split high-value domains into tradeable fractions for broader accessibility",
              icon: Zap,
              color: "warning"
            },
            {
              title: "Yield Farming",
              description: "Stake domains in liquidity pools to earn protocol rewards",
              icon: Shield,
              color: "primary"
            },
            {
              title: "Cross-chain Trading",
              description: "Trade domains across multiple blockchains with unified liquidity",
              icon: Network,
              color: "accent"
            }
          ].map((useCase, index) => (
            <div key={index} className="card-cyber animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <useCase.icon className={`w-5 h-5 text-${useCase.color}`} />
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="card-cyber bg-gradient-cyber">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              Ready to Build on Doma?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Start building the future of domain ownership with our comprehensive developer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                Get Started
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </div>
          </CardContent>
        </div>
      </section>
    </div>
  );
}