import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Coins, 
  Share, 
  Shield, 
  Network, 
  Database, 
  Settings,
  ExternalLink,
  Code,
  Lock,
  Zap
} from "lucide-react";

export default function Modules() {
  const modules = [
    {
      title: "Domain Tokenization Module",
      description: "Core module for converting traditional domains into blockchain tokens",
      icon: Coins,
      status: "Live",
      features: [
        "ERC-721 domain ownership tokens",
        "Metadata management",
        "Ownership verification",
        "Transfer mechanisms"
      ],
      useCases: [
        "Domain portfolio management",
        "NFT marketplace integration",
        "Automated domain trading"
      ],
      color: "primary"
    },
    {
      title: "Domain Fractionalization Module", 
      description: "Enable fractional ownership through ERC-20 synthetic tokens",
      icon: Share,
      status: "Live",
      features: [
        "ERC-20 synthetic tokens",
        "Fractional ownership rights",
        "Yield distribution",
        "Governance mechanisms"
      ],
      useCases: [
        "Crowdfunded domain acquisition",
        "Portfolio diversification",
        "Liquidity pool creation"
      ],
      color: "accent"
    },
    {
      title: "Compliance Module",
      description: "UDRP and ICANN compliance for legitimate domain operations",
      icon: Shield,
      status: "Live", 
      features: [
        "UDRP dispute handling",
        "Transfer lock mechanisms",
        "Compliance monitoring",
        "Legal documentation"
      ],
      useCases: [
        "Enterprise domain management",
        "Legal compliance automation",
        "Dispute resolution"
      ],
      color: "success"
    },
    {
      title: "Bridging Module",
      description: "Cross-chain domain token transfers and management",
      icon: Network,
      status: "Beta",
      features: [
        "Multi-chain support",
        "Atomic swaps",
        "State synchronization",
        "Security validators"
      ],
      useCases: [
        "Cross-chain trading",
        "Multi-chain portfolios",
        "Arbitrage opportunities"
      ],
      color: "warning"
    },
    {
      title: "Custodian Module",
      description: "Secure domain custody and management services",
      icon: Lock,
      status: "Live",
      features: [
        "Multi-signature custody",
        "Time-locked operations",
        "Emergency recovery",
        "Insurance integration"
      ],
      useCases: [
        "Institutional custody",
        "Estate planning",
        "Corporate domain management"
      ],
      color: "primary"
    },
    {
      title: "Composer Module",
      description: "Advanced domain rights and permission management",
      icon: Settings,
      status: "Beta",
      features: [
        "Granular permissions",
        "Role-based access",
        "Time-bound rights",
        "Delegation mechanisms"
      ],
      useCases: [
        "Developer access management",
        "Revenue sharing agreements",
        "Collaborative domain projects"
      ],
      color: "accent"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">
          Protocol Modules
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the modular architecture of Doma protocol. Each module provides 
          specific functionality that can be combined to create powerful domain management solutions.
        </p>
      </div>

      {/* Module Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="card-cyber animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${module.color}/20 rounded-lg flex items-center justify-center`}>
                      <module.icon className={`w-6 h-6 text-${module.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <Badge 
                        variant={module.status === "Live" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {module.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {module.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Key Features</h3>
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 bg-${module.color} rounded-full flex-shrink-0`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {module.useCases.map((useCase, useCaseIndex) => (
                      <Badge key={useCaseIndex} variant="outline" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1 btn-cyber">
                    <Code className="w-4 h-4 mr-2" />
                    View Docs
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Examples
                  </Button>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">
          Module Integration Examples
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Domain Marketplace
              </CardTitle>
              <CardDescription>
                Build a complete domain trading platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">Required Modules</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tokenization</Badge>
                  <Badge variant="secondary">Fractionalization</Badge>
                  <Badge variant="secondary">Compliance</Badge>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">Features Enabled</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Full and fractional domain trading</li>
                  <li>• UDRP compliant transactions</li>
                  <li>• Automated royalty distribution</li>
                  <li>• Legal compliance monitoring</li>
                </ul>
              </div>
            </CardContent>
          </div>

          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-accent" />
                Enterprise Domain Hub
              </CardTitle>
              <CardDescription>
                Corporate domain management solution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">Required Modules</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custodian</Badge>
                  <Badge variant="secondary">Composer</Badge>
                  <Badge variant="secondary">Compliance</Badge>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">Features Enabled</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Multi-signature domain custody</li>
                  <li>• Role-based access control</li>
                  <li>• Compliance automation</li>
                  <li>• Team collaboration tools</li>
                </ul>
              </div>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">
          Module Architecture
        </h2>
        
        <div className="card-cyber">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Modular Design Pattern</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each module operates independently while maintaining interoperability through 
                standardized interfaces and shared state management.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-6">
              <pre className="text-sm overflow-x-auto">
{`// Example: Module Integration
interface IDomaModule {
    function getModuleInfo() external view returns (
        string memory name,
        string memory version,
        address implementation
    );
    
    function isCompatible(address module) external view returns (bool);
    function execute(bytes calldata data) external returns (bytes memory);
}

// Module Registry Contract
contract ModuleRegistry {
    mapping(bytes32 => address) public modules;
    mapping(address => bool) public authorizedModules;
    
    function registerModule(
        string memory name,
        address implementation
    ) external onlyOwner {
        bytes32 moduleId = keccak256(abi.encodePacked(name));
        modules[moduleId] = implementation;
        authorizedModules[implementation] = true;
    }
    
    function executeModule(
        string memory moduleName,
        bytes calldata data
    ) external returns (bytes memory) {
        bytes32 moduleId = keccak256(abi.encodePacked(moduleName));
        address module = modules[moduleId];
        require(authorizedModules[module], "Module not authorized");
        
        return IDomaModule(module).execute(data);
    }
}`}
              </pre>
            </div>
          </CardContent>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="card-cyber bg-gradient-cyber">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              Start Building with Modules
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Choose the modules you need and start building your domain application today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                <Code className="w-4 h-4 mr-2" />
                View Integration Guide
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Module Documentation
              </Button>
            </div>
          </CardContent>
        </div>
      </section>
    </div>
  );
}