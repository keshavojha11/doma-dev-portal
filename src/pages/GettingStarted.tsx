import React from "react";
import { ArrowRight, Globe, Zap, Book, Play, CheckCircle, Terminal, ListChecks, HelpCircle, ExternalLink } from "lucide-react";

const prerequisites = [
  { tool: "MetaMask or compatible wallet", desc: "Required for interacting with smart contracts and signing transactions" },
  { tool: "Node.js (v16+)", desc: "For using JavaScript SDKs and web3 integration" },
  { tool: "Git & Terminal", desc: "For cloning sample repos and running scripts" },
  { tool: "IDE like VSCode", desc: "Recommended for coding and development" },
  { tool: "Testnet ETH", desc: "For paying gas fees on the Doma testnet" },
  { tool: "A supported domain", desc: ".com, .ai, .io, .xyz for tokenization on testnet via D3" },
];

const steps = [
  {
    title: "Set Up Your Wallet",
    icon: <Globe className="w-8 h-8 text-primary" />,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Install <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="underline text-primary">MetaMask</a> or compatible wallet</li>
        <li>Create or import a wallet</li>
        <li>Switch to the Doma testnet (add manually or via testnet UI)</li>
        <li>Get testnet tokens (<a href="https://start-testnet.doma.xyz/" target="_blank" rel="noopener noreferrer" className="underline text-primary">faucet</a>)</li>
      </ul>
    ),
  },
  {
    title: "Register or Connect a Domain (on Testnet)",
    icon: <Book className="w-8 h-8 text-primary" />,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Visit <a href="https://testnet.d3.app" target="_blank" rel="noopener noreferrer" className="underline text-primary">D3 Testnet App</a></li>
        <li>Connect your MetaMask wallet</li>
        <li>Search for an available domain (e.g. mytestdomain.xyz)</li>
        <li>Purchase using fiat or testnet crypto</li>
        <li>Use the same wallet in D3 and Doma for ownership mapping</li>
      </ul>
    ),
  },
  {
    title: "Tokenize Your Domain",
    icon: <Zap className="w-8 h-8 text-primary" />,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Visit <a href="https://start-testnet.doma.xyz" target="_blank" rel="noopener noreferrer" className="underline text-primary">Doma Start Testnet</a></li>
        <li>Connect your wallet</li>
        <li>Locate your registered domain from the dashboard</li>
        <li>Click <b>Tokenize</b> and sign the transaction</li>
        <li>After confirmation, your domain is a blockchain-native asset</li>
      </ul>
    ),
  },
  {
    title: "Explore the Testnet Dashboard",
    icon: <Play className="w-8 h-8 text-primary" />,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Go to <a href="https://dashboard-testnet.doma.xyz" target="_blank" rel="noopener noreferrer" className="underline text-primary">Testnet Dashboard</a></li>
        <li>View tokenized domains in your portfolio</li>
        <li>Trade or fractionalize your tokens</li>
        <li>Try bridging functionality</li>
        <li>Monitor transaction history</li>
      </ul>
    ),
  },
  {
    title: "Use the Smart Contracts",
    icon: <Terminal className="w-8 h-8 text-primary" />,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Start with the <a href="https://docs.doma.xyz/api-reference/doma-smart-contracts-api" target="_blank" rel="noopener noreferrer" className="underline text-primary">Smart Contracts API Docs</a></li>
        <li>Example: <code className="bg-muted px-2 py-1 rounded">requestTokenization(domainName)</code></li>
        <li>Example: <code className="bg-muted px-2 py-1 rounded">claimOwnership(domainId)</code></li>
        <li>All contracts follow EIP-712 for off-chain signature-based authentication</li>
      </ul>
    ),
  },
  {
    title: "Optional: Try Building Something",
    icon: <ListChecks className="w-8 h-8 text-primary" />,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Fork or clone a starter template (coming soon)</li>
        <li>Sample use cases: NFT-based domain marketplace, lending protocol, rental platform, yield from parked domains</li>
        <li>See the <a href="/guides" className="underline text-primary">Guides</a> section for inspiration</li>
      </ul>
    ),
  },
];

const checklist = [
  { label: "MetaMask installed and connected", done: true },
  { label: "Domain purchased on D3 testnet", done: true },
  { label: "Domain tokenized via Doma testnet", done: true },
  { label: "Able to view domain token on dashboard", done: true },
  { label: "Ready to build with smart contracts or APIs", done: true },
];

const troubleshooting = [
  { issue: "Domain not appearing in Doma UI", solution: "Make sure the domain is purchased with the same wallet used on Doma." },
  { issue: "Error in tokenization", solution: "Check if the domain is already tokenized or if the D3 registrar is still syncing." },
  { issue: "Gas issues", solution: "Ensure you have enough testnet ETH for transactions." },
];

const resources = [
  { label: "Doma Documentation", url: "https://docs.doma.xyz/", icon: <Book className="w-5 h-5 mr-2" /> },
  { label: "D3 Testnet App", url: "https://testnet.d3.app", icon: <Globe className="w-5 h-5 mr-2" /> },
  { label: "Doma Start Testnet", url: "https://start-testnet.doma.xyz", icon: <Zap className="w-5 h-5 mr-2" /> },
  { label: "Smart Contract APIs", url: "https://docs.doma.xyz/api-reference/doma-smart-contracts-api", icon: <Terminal className="w-5 h-5 mr-2" /> },
  { label: "Discord Support", url: "https://discord.gg/doma", icon: <HelpCircle className="w-5 h-5 mr-2" /> },
];

export default function GettingStarted() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] pt-16 pb-12 px-2">
      {/* Welcome & Intro */}
      <section className="w-full max-w-4xl mx-auto mb-12 text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style={{fontFamily: 'Inter, Space Grotesk, sans-serif'}}>Getting Started with Doma</h1>
        <p className="text-lg md:text-xl text-[#64748b] font-medium max-w-2xl mb-2">
          Welcome to the Doma Developer Portal! This guide will walk you through the initial setup required to start building with the Doma Protocol and tokenizing domains within the DomainFi ecosystem.
        </p>
      </section>

      {/* Prerequisites */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">✅ Prerequisites</h2>
        <div className="overflow-x-auto rounded-2xl shadow bg-white/60 backdrop-blur-md">
          <table className="min-w-full text-left text-base">
            <thead>
              <tr className="border-b border-[#e5e7eb]">
                <th className="py-3 px-4 font-semibold">Tool</th>
                <th className="py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {prerequisites.map((row, i) => (
                <tr key={i} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="py-2 px-4 font-medium">{row.tool}</td>
                  <td className="py-2 px-4 text-[#64748b]">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      </section>

      {/* Step-by-Step Onboarding */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">🛠️ Step-by-Step Onboarding</h2>
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <div className="flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-full w-16 h-16 mb-4 md:mb-0">
                {step.icon}
              </div>
              <div>
                <div className="text-xl font-bold mb-1">{i + 1}. {step.title}</div>
                <div className="text-base text-[#64748b]">{step.content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Checklist */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">📋 Developer Checklist</h2>
        <ul className="flex flex-col gap-3">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{item.label}</span>
            </li>
          ))}
                    </ul>
      </section>

      {/* Troubleshooting */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">❓ Troubleshooting</h2>
        <ul className="flex flex-col gap-4">
          {troubleshooting.map((row, i) => (
            <li key={i} className="bg-white/60 backdrop-blur-md rounded-xl shadow p-4">
              <div className="font-semibold mb-1">{row.issue}</div>
              <div className="text-[#64748b]">{row.solution}</div>
            </li>
          ))}
                    </ul>
      </section>

      {/* Resources */}
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">📌 Resources</h2>
        <div className="flex flex-wrap gap-4">
          {resources.map((res) => (
            <a
              key={res.label}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-3 rounded-xl bg-white/60 backdrop-blur-md shadow text-lg font-medium hover:bg-primary/10 transition"
            >
              {res.icon}
              <span>{res.label}</span>
              <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}