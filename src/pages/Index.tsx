import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DomainVisualization } from "@/components/DomainVisualization";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap,
  PlayCircle,
  Globe,
  Coins,
  Network,
  Code
} from "lucide-react";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center max-w-6xl px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-8 bg-primary/20 text-primary border-primary/30">
              <Zap className="w-4 h-4 mr-2" />
              Live on Testnet
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8"
            variants={itemVariants}
          >
            Turn Domains Into
            <br />
            <span className="bg-gradient-cyber bg-clip-text text-transparent animate-glow">
              Digital Assets
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transform any domain into a tradeable NFT.
            <br />
            No coding required. No middlemen.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={itemVariants}
          >
            <Button className="btn-cyber text-lg px-8 py-4 group">
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Try It Now
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:border-primary">
              Watch Demo
            </Button>
          </motion.div>
          
          {/* 3D Visualization */}
          <motion.div variants={itemVariants}>
            <DomainVisualization />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works - Simple Steps */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              3 simple steps to tokenize any domain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Connect Domain",
                description: "Already own a domain? Connect it. Need one? Buy it directly.",
                icon: Globe,
                color: "primary"
              },
              {
                step: "02", 
                title: "Click Tokenize",
                description: "One click transforms your domain into an NFT on your chosen blockchain.",
                icon: Zap,
                color: "accent"
              },
              {
                step: "03",
                title: "Trade & Earn",
                description: "Sell, rent, or use your domain NFT in DeFi. Instant liquidity.",
                icon: Coins,
                color: "success"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-${step.color}/20 rounded-full flex items-center justify-center mx-auto border-2 border-${step.color}/30`}>
                    <step.icon className={`w-10 h-10 text-${step.color}`} />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${step.color} rounded-full flex items-center justify-center text-${step.color}-foreground font-bold text-sm`}>
                    {step.step}
                  </div>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-6 w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Doma - Benefits */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Doma?
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for everyone, from domain investors to DeFi enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Instant Liquidity",
                description: "Turn your domain into cash in minutes, not months. No more waiting for buyers or escrow.",
                benefit: "10x faster than traditional sales"
              },
              {
                title: "Global Marketplace", 
                description: "Access buyers worldwide. Your domain NFT can be traded on any NFT marketplace.",
                benefit: "Reach millions of potential buyers"
              },
              {
                title: "Earn While You Hold",
                description: "Rent out your domains, earn staking rewards, or use them as collateral for loans.",
                benefit: "Multiple income streams"
              },
              {
                title: "Full Control",
                description: "You keep full DNS control. Update records, host websites, or transfer ownership anytime.",
                benefit: "Your domain, your rules"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-lg">{item.description}</p>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {item.benefit}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-cyber rounded-3xl p-12 text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of domain owners already using Doma
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-cyber bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <PlayCircle className="w-5 h-5 mr-2" />
                Tokenize Your First Domain
              </Button>
              <Button 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Code className="w-5 h-5 mr-2" />
                Start Building
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
