import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Terminal, Wallet, Globe, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GettingStarted() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">
          Getting Started
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Follow this step-by-step guide to tokenize your first domain using the Doma Protocol. 
          Use the D3 testnet registrar to test domain tokenization with .io domains.
        </p>
      </div>

      {/* Quick Start Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-primary">Quick Start Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              step: "1",
              title: "Environment Setup",
              description: "Install Node.js and configure your development environment",
              icon: Terminal,
              color: "primary"
            },
            {
              step: "2", 
              title: "Connect Wallet",
              description: "Set up MetaMask and connect to Doma testnet",
              icon: Wallet,
              color: "accent"
            },
            {
              step: "3",
              title: "Tokenize Domain",
              description: "Register and tokenize your first test domain",
              icon: Globe,
              color: "success"
            }
          ].map((item, index) => (
            <div key={index} className="card-cyber relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`absolute -top-3 left-6 w-8 h-8 bg-${item.color} rounded-full flex items-center justify-center text-${item.color}-foreground font-bold`}>
                {item.step}
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 text-${item.color}`} />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Setup */}
      <section className="mb-16">
        <Tabs defaultValue="environment" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="wallet">Wallet Setup</TabsTrigger>
            <TabsTrigger value="testnet">Testnet</TabsTrigger>
          </TabsList>
          
          <TabsContent value="environment" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  Environment Setup
                </CardTitle>
                <CardDescription>
                  Set up your development environment with the required tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Prerequisites */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span>Node.js (v16 or higher)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span>npm or yarn package manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span>Git for version control</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span>MetaMask browser extension</span>
                    </div>
                  </div>
                </div>

                {/* Installation */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Installation</h3>
                  <div className="bg-muted rounded-lg p-4 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Install Node.js dependencies:</p>
                      <code className="block bg-background p-3 rounded border text-sm">
                        npm install @doma/sdk ethers web3
                      </code>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Or using yarn:</p>
                      <code className="block bg-background p-3 rounded border text-sm">
                        yarn add @doma/sdk ethers web3
                      </code>
                    </div>
                  </div>
                </div>

                {/* Quick Setup Script */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Setup Script</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
{`// setup.js
const { DomaSDK } = require('@doma/sdk');

// Initialize SDK
const doma = new DomaSDK({
  network: 'testnet',
  rpcUrl: 'https://rpc-testnet.doma.xyz'
});

console.log('Doma SDK initialized successfully!');`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-accent" />
                  Wallet Configuration
                </CardTitle>
                <CardDescription>
                  Connect MetaMask to Doma testnet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* MetaMask Setup */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">MetaMask Network Configuration</h3>
                  <div className="bg-muted rounded-lg p-4 space-y-4">
                    <p className="text-sm text-muted-foreground">Add Doma testnet to MetaMask:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Network Name:</strong> Doma Testnet
                      </div>
                      <div>
                        <strong>RPC URL:</strong> https://rpc-testnet.doma.xyz
                      </div>
                      <div>
                        <strong>Chain ID:</strong> 12345
                      </div>
                      <div>
                        <strong>Currency Symbol:</strong> DOMA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Network Button */}
                <div>
                  <Button className="btn-cyber w-full">
                    <Wallet className="w-4 h-4 mr-2" />
                    Add Doma Testnet to MetaMask
                  </Button>
                </div>

                {/* Test Tokens */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Get Test Tokens</h3>
                  <div className="bg-gradient-glow rounded-lg p-4">
                    <p className="text-sm mb-4">Get free testnet tokens to start experimenting:</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Doma Testnet Faucet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>

          <TabsContent value="testnet" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-success" />
                  Testnet Integration
                </CardTitle>
                <CardDescription>
                  Connect to Doma testnet and tokenize your first domain
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Testnet Resources */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Testnet Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" asChild>
                      <a href="https://testnet.d3.app" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Testnet Registrar
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://dashboard-testnet.doma.xyz" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Testnet Dashboard
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://start-testnet.doma.xyz" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Getting Started Guide
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://docs.doma.xyz/getting-started" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Official Documentation
                      </a>
                    </Button>
                  </div>
                </div>

                {/* First Domain Tokenization */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tokenize Your First Domain</h3>
                  <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Step 1: Visit D3 Testnet Registrar</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Navigate to the D3 testnet registrar and login/register for an account
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://testnet.d3.app" target="_blank" rel="noopener noreferrer">
                        Go to D3 Testnet
                      </a>
                    </Button>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Step 2: Search and Purchase .io Domain</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Search for an available .io domain name and purchase it using either:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                      <li>• <strong>Fiat:</strong> Any Stripe test card (e.g., 4242424242424242)</li>
                      <li>• <strong>Crypto:</strong> Testnet tokens on supported chains</li>
                    </ul>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Step 3: Tokenize Your Domain</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Once purchased, go to your portfolio and click "Tokenize" next to your domain
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Choose your target blockchain for tokenization</li>
                      <li>• Confirm the transaction to mint your Domain Ownership Token</li>
                      <li>• Your domain will now be available as an NFT in your wallet</li>
                    </ul>
                  </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Next Steps */}
      <section>
        <div className="card-cyber bg-gradient-cyber">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              What's Next?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Now that you have your environment set up, explore our comprehensive guides and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                <Code className="w-4 h-4 mr-2" />
                Core Concepts
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Tutorials
              </Button>
            </div>
          </CardContent>
        </div>
      </section>
    </div>
  );
}