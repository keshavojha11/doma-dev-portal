import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  ExternalLink, 
  MessageSquare,
  AlertCircle,
  DollarSign,
  Shield,
  Globe,
  Zap,
  ChevronRight
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  // Static color mappings for Tailwind classes
  const colorMap = {
    primary: "text-primary bg-primary/20",
    accent: "text-accent bg-accent/20",
    success: "text-green-500 bg-green-100",
    warning: "text-yellow-500 bg-yellow-100",
    destructive: "text-red-500 bg-red-100"
  };
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Globe,
      color: "primary",
      questions: [
        {
          question: "What is Doma Protocol?",
          answer: "Doma is a decentralized protocol that tokenizes domain names, making them programmable and composable within the web3 ecosystem. It bridges traditional domain registrars with blockchain infrastructure to unlock new possibilities for domain ownership and utility."
        },
        {
          question: "How do I get started with Doma?",
          answer: "Start by setting up your development environment with Node.js and MetaMask. Connect to our testnet, get test tokens from the faucet, and try tokenizing a test domain using our registrar at testnet.d3.app."
        },
        {
          question: "What blockchains does Doma support?",
          answer: "Doma currently supports Ethereum mainnet, Polygon, and Arbitrum. We're expanding to additional chains based on community demand and developer interest."
        },
        {
          question: "Is Doma compatible with existing domains?",
          answer: "Yes! Doma works with domains from major registrars. You can tokenize existing domains you own through our custodial bridge system while maintaining full DNS control."
        }
      ]
    },
    {
      title: "Gas Fees & Costs",
      icon: DollarSign,
      color: "accent",
      questions: [
        {
          question: "How much do gas fees cost?",
          answer: "Gas fees vary by network. Ethereum mainnet is typically $10-50 for tokenization, while Polygon costs under $1. We recommend using Layer 2 solutions for lower fees."
        },
        {
          question: "Are there any protocol fees?",
          answer: "Doma charges a 2.5% protocol fee on trades and transfers. This fee supports protocol development and goes to the community treasury for governance decisions."
        },
        {
          question: "Can I estimate costs before transactions?",
          answer: "Yes, our SDK includes gas estimation functions. You can preview all costs before committing to any transaction using the estimateGas() methods."
        },
        {
          question: "How are renewal fees handled?",
          answer: "Domain renewal fees are paid to the original registrar. Token holders can contribute to renewal funds through smart contracts, ensuring domains remain active."
        }
      ]
    },
    {
      title: "Web2 Domain Support",
      icon: Zap,
      color: "success",
      questions: [
        {
          question: "Which domain extensions are supported?",
          answer: "We support .com, .net, .org, .io, .xyz, and 50+ other popular TLDs. Check our documentation for the complete list of supported extensions."
        },
        {
          question: "How does DNS management work?",
          answer: "Token holders retain full DNS control. You can update A records, CNAMEs, and other DNS settings through our interface or by directly interfacing with your registrar."
        },
        {
          question: "Can I tokenize premium domains?",
          answer: "Yes, premium and high-value domains can be tokenized. For domains over $100K value, additional verification and compliance checks may be required."
        },
        {
          question: "What happens to domain privacy protection?",
          answer: "Domain privacy settings are preserved during tokenization. The blockchain only records token ownership, not personal domain registrant information."
        }
      ]
    },
    {
      title: "UDRP & ICANN Compliance",
      icon: Shield,
      color: "warning",
      questions: [
        {
          question: "How does UDRP compliance work?",
          answer: "Doma implements UDRP-compliant mechanisms. If a legitimate UDRP case is filed, our compliance module can freeze token transfers and facilitate dispute resolution."
        },
        {
          question: "What about trademark disputes?",
          answer: "Trademark disputes follow standard UDRP procedures. Token holders are notified of any disputes, and legitimate claims are processed according to ICANN policies."
        },
        {
          question: "Can domains be seized or locked?",
          answer: "Only through legitimate legal processes like UDRP decisions or court orders. Our compliance module ensures protocol adherence while protecting legitimate token holders."
        },
        {
          question: "How is domain authenticity verified?",
          answer: "We verify domain ownership through DNS challenges and registrar APIs before tokenization. This prevents tokenization of domains you don't legitimately own."
        }
      ]
    },
    {
      title: "Technical Issues",
      icon: AlertCircle,
      color: "destructive",
      questions: [
        {
          question: "Why is my transaction failing?",
          answer: "Common causes include insufficient gas, network congestion, or incorrect parameters. Check your gas settings and try again. Our Discord community can help debug specific issues."
        },
        {
          question: "How do I recover a lost transaction?",
          answer: "Check the transaction hash on the blockchain explorer. If it's pending, you may need to speed it up or cancel it. Completed transactions cannot be reversed."
        },
        {
          question: "What if a bridge transfer gets stuck?",
          answer: "Cross-chain transfers can take 10-30 minutes. If stuck longer, contact support with your transaction hash. We have recovery mechanisms for failed bridge operations."
        },
        {
          question: "How do I report a bug?",
          answer: "Report bugs on our GitHub repository or Discord #bug-reports channel. Include transaction hashes, error messages, and steps to reproduce the issue."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find answers to common questions about Doma protocol, domain tokenization, 
          and building applications on our platform.
        </p>
      </div>

      {/* Quick Links */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              className={`card-cyber p-4 text-center border border-transparent hover:border-${category.color}/50 transition-all duration-200 group rounded-xl bg-white/60 shadow-md`}
              onClick={() => {
                document.getElementById(category.title.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <category.icon className={`w-6 h-6 mx-auto mb-2 ${colorMap[category.color]?.split(' ')[0] || ''} group-hover:scale-110 transition-transform`} />
              <h3 className="text-sm font-medium text-foreground/90">{category.title}</h3>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="space-y-12">
        {faqCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            id={category.title.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[category.color]?.split(' ')[1] || ''}`}> 
                <category.icon className={`w-5 h-5 ${colorMap[category.color]?.split(' ')[0] || ''}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="bg-[#f8fafc] shadow rounded-xl p-0">
              <CardContent className="p-0 divide-y divide-border">
                {category.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="px-6 py-6">
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className={`w-4 h-4 ${colorMap[category.color]?.split(' ')[0] || ''} flex-shrink-0`} />
                      <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                    </div>
                    <div className="pl-7">
                      <p className="leading-relaxed text-gray-900 text-base">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </div>
          </div>
        ))}
      </section>

      {/* Troubleshooting Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">
          Troubleshooting Guide
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-warning" />
                Common Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Transaction failed or reverted",
                  "MetaMask connection issues", 
                  "Insufficient gas for transaction",
                  "Domain verification problems",
                  "Cross-chain bridge delays"
                ].map((issue, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{issue}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Troubleshooting Guide
              </Button>
            </CardContent>
          </div>

          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Get Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Discord Community</h4>
                  <p className="text-xs text-muted-foreground">Real-time help from developers and community</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium text-sm mb-1">GitHub Issues</h4>
                  <p className="text-xs text-muted-foreground">Report bugs and feature requests</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Email Support</h4>
                  <p className="text-xs text-muted-foreground">developers@doma.xyz for direct assistance</p>
                </div>
              </div>
              <Button className="w-full btn-cyber">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="text-center">
        <div className="card-cyber bg-gradient-cyber">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Can't find what you're looking for? Our community and support team are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cyber">
                <MessageSquare className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Browse Documentation
              </Button>
            </div>
          </CardContent>
        </div>
      </section>
    </div>
  );
}