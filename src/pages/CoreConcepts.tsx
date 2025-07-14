import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins, Share, Shield, ArrowRightLeft, Key, Lock } from "lucide-react";

export default function CoreConcepts() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">
          Core Concepts
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Understand the fundamental building blocks of the Doma protocol and how 
          domain tokenization enables new forms of digital asset management.
        </p>
      </div>

      {/* Main Concepts */}
      <section className="mb-16">
        <Tabs defaultValue="ownership" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="ownership">Ownership Tokens</TabsTrigger>
            <TabsTrigger value="synthetic">Synthetic Tokens</TabsTrigger>
            <TabsTrigger value="rights">Domain Rights</TabsTrigger>
            <TabsTrigger value="bridges">Cross-Chain</TabsTrigger>
          </TabsList>

          <TabsContent value="ownership" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Coins className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Domain Ownership Tokens (DOT)</CardTitle>
                    <CardDescription>ERC-721 tokens representing direct domain ownership</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* What are DOTs */}
                <div className="bg-gradient-glow rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">What are Domain Ownership Tokens?</h3>
                  <p className="text-foreground mb-4">
                    Domain Ownership Tokens (DOTs) are ERC-721 NFTs that represent 1:1 ownership of a domain name. 
                    When you tokenize a domain through Doma, you receive a DOT that gives you complete control 
                    over that domain's DNS records, transfers, and renewals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded p-4">
                      <h4 className="font-medium mb-2 text-success">✓ Ownership Rights</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Full DNS control</li>
                        <li>• Transfer permissions</li>
                        <li>• Renewal authority</li>
                        <li>• Revenue rights</li>
                      </ul>
                    </div>
                    <div className="bg-background/50 rounded p-4">
                      <h4 className="font-medium mb-2 text-accent">⚡ Token Features</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• ERC-721 standard</li>
                        <li>• Tradeable on NFT markets</li>
                        <li>• Programmable ownership</li>
                        <li>• Composable with DeFi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Implementation */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Technical Implementation</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
{`// Example: DOT Contract Interface
interface DomainOwnershipToken {
    // Standard ERC-721 functions
    function tokenURI(uint256 tokenId) external view returns (string);
    function ownerOf(uint256 tokenId) external view returns (address);
    
    // Domain-specific functions
    function getDomainInfo(uint256 tokenId) external view returns (
        string memory domain,
        address registrar,
        uint256 expiryDate,
        bool isActive
    );
    
    // Control functions
    function updateDNS(uint256 tokenId, bytes calldata dnsData) external;
    function renewDomain(uint256 tokenId, uint256 duration) external;
}`}
                    </pre>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Common Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Portfolio Management",
                        description: "Manage multiple domains from a single wallet",
                        icon: "💼"
                      },
                      {
                        title: "Trading & Investment",
                        description: "Buy, sell, and trade domains on NFT marketplaces",
                        icon: "💰"
                      },
                      {
                        title: "Collateralization",
                        description: "Use domains as collateral for DeFi loans",
                        icon: "🏦"
                      }
                    ].map((useCase, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">{useCase.icon}</div>
                        <h4 className="font-medium mb-2">{useCase.title}</h4>
                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>

          <TabsContent value="synthetic" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Share className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Domain Synthetic Tokens (DST)</CardTitle>
                    <CardDescription>ERC-20 tokens for fractionalized domain ownership</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* What are DSTs */}
                <div className="bg-gradient-glow rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent">What are Domain Synthetic Tokens?</h3>
                  <p className="text-foreground mb-4">
                    Domain Synthetic Tokens (DSTs) are ERC-20 tokens that represent fractional ownership or 
                    economic exposure to a domain without direct control rights. They enable broader participation 
                    in domain ownership and new financial instruments.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded p-4">
                      <h4 className="font-medium mb-2 text-success">✓ Benefits</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Lower entry barriers</li>
                        <li>• Liquid trading</li>
                        <li>• Portfolio diversification</li>
                        <li>• Yield opportunities</li>
                      </ul>
                    </div>
                    <div className="bg-background/50 rounded p-4">
                      <h4 className="font-medium mb-2 text-warning">⚠ Limitations</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• No direct control</li>
                        <li>• Governance-based decisions</li>
                        <li>• Dependent on protocols</li>
                        <li>• Smart contract risk</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Types of DSTs */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Types of Synthetic Tokens</h3>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Fractional DSTs",
                        description: "Represent direct fractional ownership of a specific domain",
                        example: "1000 GOOGLE.DST tokens = 1/1000 ownership of google.com",
                        color: "primary"
                      },
                      {
                        type: "Index DSTs", 
                        description: "Represent exposure to a basket of domains",
                        example: "TECH.DST tracks the performance of top tech domains",
                        color: "accent"
                      },
                      {
                        type: "Yield DSTs",
                        description: "Represent claims on domain-generated revenue",
                        example: "RENT.DST tokens receive rental income from domains",
                        color: "success"
                      }
                    ].map((dst, index) => (
                      <div key={index} className={`border border-${dst.color}/30 rounded-lg p-4`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className={`bg-${dst.color}/20 text-${dst.color}`}>
                            {dst.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground mb-2">{dst.description}</p>
                        <p className="text-xs text-muted-foreground italic">Example: {dst.example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trading and Liquidity */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Trading and Liquidity</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
{`// Example: DST Trading
interface DomainSyntheticToken {
    // Standard ERC-20 functions
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    
    // Synthetic-specific functions
    function getUnderlyingDomain() external view returns (uint256 dotTokenId);
    function getOwnershipPercentage(address holder) external view returns (uint256);
    function claimYield() external returns (uint256 amount);
    
    // Governance functions
    function vote(uint256 proposalId, bool support) external;
    function getVotingPower(address holder) external view returns (uint256);
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>

          <TabsContent value="rights" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                    <Key className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Composable Domain Rights</CardTitle>
                    <CardDescription>Granular, programmable permissions for domain operations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Rights Overview */}
                <div className="bg-gradient-glow rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-success">Composable Rights System</h3>
                  <p className="text-foreground mb-4">
                    Doma introduces a granular rights system that allows domain owners to delegate specific 
                    permissions to different parties without transferring full ownership. This enables 
                    sophisticated domain management and new business models.
                  </p>
                </div>

                {/* Rights Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Rights Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        category: "Technical Rights",
                        icon: "⚙️",
                        rights: [
                          "DNS record management",
                          "Subdomain creation",
                          "SSL certificate control",
                          "Hosting configuration"
                        ]
                      },
                      {
                        category: "Commercial Rights", 
                        icon: "💼",
                        rights: [
                          "Revenue collection",
                          "Advertising placement",
                          "Sponsorship agreements",
                          "Monetization strategies"
                        ]
                      },
                      {
                        category: "Transfer Rights",
                        icon: "🔄", 
                        rights: [
                          "Domain transfers",
                          "Ownership changes",
                          "Lease agreements",
                          "Subletting permissions"
                        ]
                      },
                      {
                        category: "Legal Rights",
                        icon: "⚖️",
                        rights: [
                          "UDRP proceedings",
                          "Trademark defense",
                          "Legal representation",
                          "Compliance management"
                        ]
                      }
                    ].map((category, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{category.icon}</span>
                          <h4 className="font-medium">{category.category}</h4>
                        </div>
                        <ul className="space-y-1">
                          {category.rights.map((right, rightIndex) => (
                            <li key={rightIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                              {right}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Example */}
                <div>
                  <h3 className="text-lg font-semibent mb-4">Implementation Example</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
{`// Example: Rights Management Contract
contract DomainRightsManager {
    struct Rights {
        bool canManageDNS;
        bool canCollectRevenue; 
        bool canTransfer;
        bool canSublet;
        uint256 expiryDate;
    }
    
    mapping(uint256 => mapping(address => Rights)) public delegatedRights;
    
    function delegateRights(
        uint256 domainTokenId,
        address delegate,
        Rights memory rights
    ) external onlyOwner(domainTokenId) {
        delegatedRights[domainTokenId][delegate] = rights;
        emit RightsDelegated(domainTokenId, delegate, rights);
    }
    
    function revokeRights(uint256 domainTokenId, address delegate) external {
        delete delegatedRights[domainTokenId][delegate];
        emit RightsRevoked(domainTokenId, delegate);
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Practical Use Cases</h3>
                  <div className="space-y-3">
                    {[
                      {
                        scenario: "Web Development Agency",
                        description: "Grant DNS management rights to developers while retaining ownership and revenue rights"
                      },
                      {
                        scenario: "Domain Leasing",
                        description: "Lease technical rights for a fixed period while maintaining legal ownership"
                      },
                      {
                        scenario: "Revenue Sharing",
                        description: "Share advertising revenue with content creators while controlling domain transfers"
                      },
                      {
                        scenario: "Joint Ventures",
                        description: "Create complex permission structures for multi-party domain projects"
                      }
                    ].map((useCase, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-2 text-primary">{useCase.scenario}</h4>
                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>

          <TabsContent value="bridges" className="space-y-6">
            <div className="card-cyber">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                    <ArrowRightLeft className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Cross-Chain Bridges</CardTitle>
                    <CardDescription>Seamless domain token transfers across different blockchains</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bridge Overview */}
                <div className="bg-gradient-glow rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-warning">Cross-Chain Domain Management</h3>
                  <p className="text-foreground mb-4">
                    Doma's cross-chain bridge system allows domain tokens to exist and be traded across 
                    multiple blockchains while maintaining a single source of truth for domain ownership. 
                    This enables broader liquidity and access to different DeFi ecosystems.
                  </p>
                </div>

                {/* Supported Networks */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Supported Networks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        network: "Ethereum",
                        status: "Live",
                        features: ["Full DOT support", "DST trading", "DeFi integration"],
                        color: "primary"
                      },
                      {
                        network: "Polygon",
                        status: "Live", 
                        features: ["Low-cost trading", "Fast transactions", "Gaming integration"],
                        color: "accent"
                      },
                      {
                        network: "Arbitrum",
                        status: "Beta",
                        features: ["L2 scaling", "Reduced fees", "DeFi protocols"],
                        color: "success"
                      }
                    ].map((network, index) => (
                      <div key={index} className="bg-muted rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{network.network}</h4>
                          <Badge variant={network.status === "Live" ? "default" : "secondary"}>
                            {network.status}
                          </Badge>
                        </div>
                        <ul className="space-y-1">
                          {network.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 bg-${network.color} rounded-full`}></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bridge Mechanics */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Bridge Mechanics</h3>
                  <div className="bg-muted rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2 text-primary">Lock & Mint</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          When bridging a DOT to another chain:
                        </p>
                        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                          <li>Original token is locked in bridge contract</li>
                          <li>Proof is generated and verified</li>
                          <li>Equivalent token is minted on target chain</li>
                          <li>User receives bridged token</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-accent">Burn & Release</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          When bridging back to origin chain:
                        </p>
                        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                          <li>Bridged token is burned on current chain</li>
                          <li>Burn proof is generated</li>
                          <li>Original token is unlocked</li>
                          <li>User receives original token</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Measures */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Security Measures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-success" />
                        <h4 className="font-medium">Multi-Signature Validation</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Bridge operations require multiple validator signatures to prevent single points of failure.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4 text-warning" />
                        <h4 className="font-medium">Time Delays</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Large value transfers include time delays for additional security review.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Usage Example */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Usage Example</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
{`// Example: Cross-chain bridge usage
const bridge = new DomaBridge({
  sourceChain: 'ethereum',
  targetChain: 'polygon'
});

// Bridge a domain token
const bridgeResult = await bridge.bridgeToken({
  tokenId: 12345,
  recipient: '0x...',
  sourceNetwork: 'ethereum',
  targetNetwork: 'polygon'
});

// Monitor bridge status
const status = await bridge.getBridgeStatus(bridgeResult.transactionId);
console.log('Bridge status:', status); // pending, confirmed, completed`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}