import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Twitter, 
  Github, 
  Calendar,
  Users,
  ExternalLink,
  BookOpen,
  Zap,
  Trophy,
  DollarSign
} from "lucide-react";

export default function Community() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-glow">
          Join the Doma Community
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with developers, domain enthusiasts, and DomainFi pioneers. 
          Get support, share ideas, and help shape the future of decentralized domain ownership.
        </p>
      </div>

      {/* Community Channels */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-primary">Community Channels</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              platform: "Discord",
              description: "Real-time chat with developers and community members",
              members: "2.5K+",
              activity: "Very High",
              link: "https://discord.gg/doma",
              icon: MessageSquare,
              color: "primary"
            },
            {
              platform: "Twitter",
              description: "Latest updates, announcements, and community highlights",
              members: "8.2K+",
              activity: "Daily",
              link: "https://x.com/domaprotocol",
              icon: Twitter,
              color: "accent"
            },
            {
              platform: "GitHub",
              description: "Open source code, issues, and collaboration",
              members: "450+",
              activity: "High",
              link: "https://github.com/doma-protocol",
              icon: Github,
              color: "success"
            }
          ].map((channel, index) => (
            <div key={index} className="card-cyber animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 bg-${channel.color}/20 rounded-lg flex items-center justify-center`}>
                    <channel.icon className={`w-5 h-5 text-${channel.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{channel.platform}</CardTitle>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {channel.members} members
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {channel.activity}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                <Button asChild className="w-full btn-cyber">
                  <a href={channel.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Join {channel.platform}
                  </a>
                </Button>
              </CardContent>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Fund */}
      <section className="mb-16">
        <div className="card-cyber bg-gradient-cyber">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
                $1M Developer Fund
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                We're investing $1M to support developers building on Doma. Apply for grants, 
                participate in hackathons, and get funding for your innovative domain projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2 text-primary-foreground">Grants</h3>
                <p className="text-sm text-primary-foreground/80">Up to $50K for innovative projects</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2 text-primary-foreground">Hackathons</h3>
                <p className="text-sm text-primary-foreground/80">Monthly competitions with prizes</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2 text-primary-foreground">Incubation</h3>
                <p className="text-sm text-primary-foreground/80">Mentorship and ongoing support</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="btn-cyber mr-4">
                Apply for Grant
              </Button>
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </div>
      </section>

      {/* Community Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-primary">Upcoming Events</h2>
        
        <div className="space-y-6">
          {[
            {
              title: "DomainFi Developer Workshop",
              date: "March 15, 2024",
              time: "2:00 PM UTC",
              type: "Workshop",
              description: "Learn to build domain lending protocols with hands-on coding",
              link: "#"
            },
            {
              title: "Doma Protocol AMA",
              date: "March 22, 2024", 
              time: "6:00 PM UTC",
              type: "AMA",
              description: "Ask the core team anything about protocol development and roadmap",
              link: "#"
            },
            {
              title: "Q2 Hackathon Kickoff",
              date: "April 1, 2024",
              time: "All Day",
              type: "Hackathon",
              description: "3-week hackathon with $100K in prizes for best domain applications",
              link: "#"
            }
          ].map((event, index) => (
            <div key={index} className="card-cyber">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <Badge variant="secondary">{event.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time}</span>
                    </div>
                  </div>
                  <Button variant="outline">
                    Register
                  </Button>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-primary">Community Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <h4 className="font-medium text-sm">Getting Started Guide</h4>
                <p className="text-xs text-muted-foreground">Complete beginner's guide to Doma</p>
              </a>
              <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <h4 className="font-medium text-sm">Video Tutorials</h4>
                <p className="text-xs text-muted-foreground">Step-by-step coding tutorials</p>
              </a>
              <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <h4 className="font-medium text-sm">Best Practices</h4>
                <p className="text-xs text-muted-foreground">Security and optimization tips</p>
              </a>
            </CardContent>
          </div>

          <div className="card-cyber">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-warning" />
                Community Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-medium text-sm">Project Spotlight</h4>
                <p className="text-xs text-muted-foreground">DomainLend - P2P domain lending platform</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-medium text-sm">Developer of the Month</h4>
                <p className="text-xs text-muted-foreground">Sarah Chen - Built domain fractionalization UI</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-medium text-sm">Hackathon Winner</h4>
                <p className="text-xs text-muted-foreground">DomainDAO - Governance for domain collectives</p>
              </div>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-primary">Contact & Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-cyber">
            <CardHeader>
              <CardTitle>Get Support</CardTitle>
              <CardDescription>Need help with integration or have technical questions?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Community Support</h4>
                <p className="text-xs text-muted-foreground">
                  Join our Discord for community help and real-time support from other developers.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Email Support</h4>
                <p className="text-xs text-muted-foreground">
                  For direct support, reach out to: <strong>developers@doma.xyz</strong>
                </p>
              </div>
              <Button variant="outline" className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get Support
              </Button>
            </CardContent>
          </div>

          <div className="card-cyber">
            <CardHeader>
              <CardTitle>Partnership</CardTitle>
              <CardDescription>Interested in building together or integrating Doma?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Business Development</h4>
                <p className="text-xs text-muted-foreground">
                  Explore partnership opportunities and business integrations.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Technical Integration</h4>
                <p className="text-xs text-muted-foreground">
                  Get dedicated support for enterprise and large-scale integrations.
                </p>
              </div>
              <Button variant="outline" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Partner With Us
              </Button>
            </CardContent>
          </div>
        </div>
      </section>
    </div>
  );
}