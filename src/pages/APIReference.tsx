import React from "react";

const contracts = [
  { name: "OwnershipToken", purpose: "ERC-721 contract for tokenized domains" },
  { name: "DomaProxy", purpose: "Proxy contract to handle domain tokenization requests" },
  { name: "MetadataRegistry", purpose: "Stores and resolves domain metadata" },
];

const ownershipTokenFns = [
  { fn: "ownerOf(tokenId)", desc: "Returns the address of the token owner" },
  { fn: "approve(address to, uint256 tokenId)", desc: "Approves a new owner" },
  { fn: "transferFrom(address from, address to, uint256 tokenId)", desc: "Transfers domain ownership" },
];

const domaProxyFns = [
  { fn: "requestTokenization(string domain)", desc: "Requests domain tokenization" },
  { fn: "claimOwnership(string domain, address to, bytes signature)", desc: "Claims token after off-chain verification (EIP-712)" },
];

const events = [
  "DomainTokenized(string domain, address owner, uint256 tokenId)",
  "OwnershipClaimed(string domain, address to)",
  "TokenTransferred(uint256 tokenId, address from, address to)",
];

const eip712Example = `{
  "types": {
    "TokenizationRequest": [
      { "name": "domain", "type": "string" },
      { "name": "owner", "type": "address" }
    ]
  },
  "primaryType": "TokenizationRequest",
  "domain": {
    "name": "Doma Protocol",
    "version": "1"
  },
  "message": {
    "domain": "example.xyz",
    "owner": "0x..."
  }
}`;

export default function APIReference() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] pt-16 pb-12 px-2">
      <section className="w-full max-w-4xl mx-auto mb-12 text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style={{fontFamily: 'Inter, Space Grotesk, sans-serif'}}>API Reference</h1>
        <p className="text-lg md:text-xl text-[#64748b] font-medium max-w-2xl mb-2">
          This section provides detailed references for integrating with Doma smart contracts and APIs. These endpoints allow developers to tokenize domains, manage domain metadata, and interact with domain tokens.
        </p>
      </section>

      {/* API Overview */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">🔗 API Overview</h2>
        <ul className="list-disc pl-5 text-base text-[#64748b] mb-2">
          <li>All smart contract interactions follow Ethereum standards: <b>ERC-721</b> for Domain Ownership Tokens and <b>EIP-712</b> for typed data signing.</li>
          <li>Interactions are primarily through smart contracts deployed on supported chains (testnet/mainnet).</li>
        </ul>
      </section>

      {/* Core Contracts */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">📘 Core Contracts</h2>
        <div className="overflow-x-auto rounded-2xl shadow bg-white/60 backdrop-blur-md mb-4">
          <table className="min-w-full text-left text-base">
            <thead>
              <tr className="border-b border-[#e5e7eb]">
                <th className="py-3 px-4 font-semibold">Contract</th>
                <th className="py-3 px-4 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((row, i) => (
                <tr key={i} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="py-2 px-4 font-medium">{row.name}</td>
                  <td className="py-2 px-4 text-[#64748b]">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Functions */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">🔌 Key Functions</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">OwnershipToken.sol</h3>
          <ul className="mb-4">
            {ownershipTokenFns.map((fn, i) => (
              <li key={i} className="mb-2"><code className="bg-muted px-2 py-1 rounded font-mono text-base text-white">{fn.fn}</code> <span className="text-[#64748b]">— {fn.desc}</span></li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">DomaProxy.sol</h3>
          <ul>
            {domaProxyFns.map((fn, i) => (
              <li key={i} className="mb-2"><code className="bg-muted px-2 py-1 rounded font-mono text-base text-white">{fn.fn}</code> <span className="text-[#64748b]">— {fn.desc}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* EIP-712 Example */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">📎 Example EIP-712 Typed Data</h2>
        <pre className="bg-[#23272e] text-[#e5e7eb] rounded-xl p-4 text-sm overflow-x-auto mb-2 font-mono">
{eip712Example}
        </pre>
      </section>

      {/* Event Listeners */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">📡 Event Listeners</h2>
        <ul className="list-disc pl-5 text-base text-[#64748b] mb-2">
          {events.map((ev, i) => (
            <li key={i}><code className="bg-muted px-2 py-1 rounded font-mono text-base text-white">{ev}</code></li>
          ))}
        </ul>
      </section>

      {/* Tools */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">📚 Tools</h2>
        <ul className="list-disc pl-5 text-base text-[#64748b] mb-2">
          <li>Use <b>ethers.js</b> or <b>web3.js</b> for contract integration</li>
          <li>Use testnet block explorers to verify transactions</li>
          <li>All smart contract ABIs are linked in the <a href="/smart-contracts" className="underline text-primary">Smart Contracts</a> section</li>
        </ul>
      </section>

      {/* More Details */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-3">📖 More details</h2>
        <a href="https://docs.doma.xyz/api-reference/doma-smart-contracts-api" target="_blank" rel="noopener noreferrer" className="underline text-primary text-lg">Read the full API Reference in the Doma Docs</a>
      </section>
    </div>
  );
} 