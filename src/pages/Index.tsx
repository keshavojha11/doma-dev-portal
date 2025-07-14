
import React from "react";
import { useNavigate } from "react-router-dom";
import { Book, Play, Users, Zap, Globe, ArrowRight, Badge, ExternalLink, Network, Shield, Coins, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { icon: <Globe className="w-7 h-7 text-primary" />, label: "Set up Wallet" },
  { icon: <Zap className="w-7 h-7 text-primary" />, label: "Connect to Testnet" },
  { icon: <ArrowRight className="w-7 h-7 text-primary" />, label: "Get Test Tokens" },
  { icon: <Book className="w-7 h-7 text-primary" />, label: "Tokenize Domain" },
];

const Section = ({ heading, text, visual }: { heading: string; text: React.ReactNode; visual: React.ReactNode }) => (
<>
</>
);



const Index = () => (
  <div className="container mx-auto px-6 py-16 max-w-5xl">
    <section className="mb-16 flex flex-col items-center text-center">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">What is Doma?</h1>
        <p className="text-lg text-gray-700 mb-4">
          Doma is a blockchain-based protocol that transforms traditional Web2 domain names into programmable, tokenized assets. It introduces the concept of DomainFi, where domain ownership is no longer just about DNS resolution—but about composable financial and digital rights. With Doma, domains become ERC-721 tokens onchain, enabling ownership, trade, lending, and composability in smart contracts.
        </p>
      </div>
    </section>

    {/* Core Concepts Card/Section */}
    <section className="mb-16 flex flex-col items-center">
      <div className="w-full max-w-xl bg-[#f8fafc] rounded-2xl shadow p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Core Concepts</h2>
        <p className="text-gray-700 mb-4 text-center">Understand the fundamental building blocks of the Doma protocol and how domain tokenization enables new forms of digital asset management.</p>
        <a href="/core-concepts" className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:scale-105 transition-transform">Explore Core Concepts</a>
      </div>
    </section>

    <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How the Protocol Works</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>Domain Registration:</b> Users register domains through integrated registrars (e.g. D3).</li>
          <li><b>Tokenization:</b> Domains are tokenized via Doma’s smart contracts into Domain Ownership Tokens (ERC-721).</li>
          <li><b>Synthetic Token Creation:</b> Specific rights—like subdomain creation or DNS editing—can be fractionalized into fungible synthetic tokens.</li>
          <li><b>Cross-Chain Portability:</b> Tokenized domains and their rights can be bridged across supported blockchains.</li>
          <li><b>Compliance Layer:</b> Domains respect ICANN policies via off-chain logic and compliance modules (e.g., Transfer Locks, Forced Detokenization).</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Animated Workflow Diagram - larger and text-fitting */}
        <svg width="320" height="400" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          {/* Step 1: Domain Registration */}
          <g>
            <rect x="60" y="30" width="200" height="48" rx="16" fill="#b5e4ca"/>
            <text x="160" y="60" textAnchor="middle" fontSize="18" fill="#222" fontWeight="bold">Domain Registration</text>
          </g>
          {/* Arrow 1 */}
          <g>
            <rect x="153" y="78" width="14" height="32" rx="7" fill="#a5b4fc">
              <animate attributeName="fill" values="#a5b4fc;#818cf8;#a5b4fc" dur="2s" repeatCount="indefinite"/>
            </rect>
            <polygon points="160,110 170,126 150,126" fill="#818cf8">
              <animate attributeName="fill" values="#818cf8;#6366f1;#818cf8" dur="2s" repeatCount="indefinite"/>
            </polygon>
          </g>
          {/* Step 2: Tokenization */}
          <g>
            <rect x="60" y="134" width="200" height="48" rx="16" fill="#fcd34d"/>
            <text x="160" y="164" textAnchor="middle" fontSize="18" fill="#222" fontWeight="bold">Tokenization</text>
          </g>
          {/* Arrow 2 */}
          <g>
            <rect x="153" y="182" width="14" height="32" rx="7" fill="#fca5a5">
              <animate attributeName="fill" values="#fca5a5;#f87171;#fca5a5" dur="2s" repeatCount="indefinite"/>
            </rect>
            <polygon points="160,214 170,230 150,230" fill="#f87171">
              <animate attributeName="fill" values="#f87171;#ef4444;#f87171" dur="2s" repeatCount="indefinite"/>
            </polygon>
          </g>
          {/* Step 3: Synthetic Token Creation */}
          <g>
            <rect x="60" y="238" width="200" height="48" rx="16" fill="#a7f3d0"/>
            <text x="160" y="268" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Synthetic Token Creation</text>
          </g>
          {/* Arrow 3 */}
          <g>
            <rect x="153" y="286" width="14" height="32" rx="7" fill="#fbbf24">
              <animate attributeName="fill" values="#fbbf24;#f59e42;#fbbf24" dur="2s" repeatCount="indefinite"/>
            </rect>
            <polygon points="160,318 170,334 150,334" fill="#f59e42">
              <animate attributeName="fill" values="#f59e42;#fbbf24;#f59e42" dur="2s" repeatCount="indefinite"/>
            </polygon>
          </g>
          {/* Step 4: Cross-Chain Portability */}
          <g>
            <rect x="60" y="342" width="200" height="48" rx="16" fill="#bae6fd"/>
            <text x="160" y="372" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Cross-Chain Portability</text>
          </g>
          {/* Compliance Layer (side badge) */}
          <g>
            <rect x="230" y="190" width="80" height="32" rx="12" fill="#ddd6fe"/>
            <text x="270" y="212" textAnchor="middle" fontSize="14" fill="#6d28d9">Compliance</text>
          </g>
        </svg>
      </div>
    </section>

    <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Protocol Infrastructure</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><b>Ownership Token Contract:</b> Manages ERC-721 domain NFTs.</li>
          <li><b>Doma Proxy:</b> Handles domain-to-token conversion via signature-based authorization.</li>
          <li><b>Metadata Registry:</b> Resolves token metadata.</li>
          <li><b>Bridging Layer:</b> Ensures cross-chain token portability.</li>
          <li><b>Custodian & Compliance Modules:</b> Ensure registrar integration and legal enforcement.</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Animated Infra Diagram - larger and text-fitting */}
        <svg width="320" height="400" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          {/* Ownership Token Contract */}
          <g>
            <rect x="40" y="30" width="240" height="48" rx="16" fill="#fcd34d"/>
            <text x="160" y="60" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Ownership Token Contract</text>
            <text x="160" y="78" textAnchor="middle" fontSize="13" fill="#555">ERC-721 domain NFTs</text>
          </g>
          {/* Doma Proxy */}
          <g>
            <rect x="40" y="100" width="240" height="48" rx="16" fill="#a7f3d0"/>
            <text x="160" y="130" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Doma Proxy</text>
            <text x="160" y="148" textAnchor="middle" fontSize="13" fill="#555">Signature-based conversion</text>
          </g>
          {/* Metadata Registry */}
          <g>
            <rect x="40" y="170" width="240" height="48" rx="16" fill="#bae6fd"/>
            <text x="160" y="200" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Metadata Registry</text>
            <text x="160" y="218" textAnchor="middle" fontSize="13" fill="#555">Resolves token metadata</text>
          </g>
          {/* Bridging Layer */}
          <g>
            <rect x="40" y="240" width="240" height="48" rx="16" fill="#b5e4ca"/>
            <text x="160" y="270" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Bridging Layer</text>
            <text x="160" y="288" textAnchor="middle" fontSize="13" fill="#555">Cross-chain portability</text>
          </g>
          {/* Custodian & Compliance Modules */}
          <g>
            <rect x="40" y="310" width="240" height="48" rx="16" fill="#ddd6fe"/>
            <text x="160" y="340" textAnchor="middle" fontSize="17" fill="#222" fontWeight="bold">Custodian & Compliance</text>
            <text x="160" y="358" textAnchor="middle" fontSize="13" fill="#555">Registrar & legal enforcement</text>
          </g>
        </svg>
      </div>
    </section>

    {/* Core Concepts Card/Section */}
    <section className="mb-16 flex flex-col items-center">
      <div className="w-full max-w-xl bg-[#f8fafc] rounded-2xl shadow p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Core Concepts</h2>
        <p className="text-gray-700 mb-4 text-center">Understand the fundamental building blocks of the Doma protocol and how domain tokenization enables new forms of digital asset management.</p>
        <a href="/core-concepts" className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:scale-105 transition-transform">Explore Core Concepts</a>
      </div>
    </section>

    <section className="mb-16 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Use Cases</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 inline-block text-left">
        <li><b>NFT Domain Marketplace:</b> Instant-settlement trades of tokenized domains.</li>
        <li><b>Domain Lending Platform:</b> Use domains as collateral for borrowing stablecoins.</li>
        <li><b>Subdomain Rental DApps:</b> Lease subdomains using synthetic tokens.</li>
        <li><b>Parking Yield Platforms:</b> Monetize idle domain assets onchain.</li>
        <li><b>DAO-owned Domains:</b> Share governance and control over domains using tokens.</li>
      </ul>
    </section>

    <section className="mb-16 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Ideas to Build on Doma</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 inline-block text-left">
        <li>DAO registrar management tool (multi-sig controlled domain registrar)</li>
        <li>Domain auction and sniping platform</li>
        <li>Reputation protocol tied to domain tokens (Linked ENS-style profiles)</li>
        <li>Token-gated website builder using domain NFTs</li>
        <li>Web3 publishing tool where authors own their domain + IP via NFTs</li>
      </ul>
    </section>
  </div>
);

export default Index;
