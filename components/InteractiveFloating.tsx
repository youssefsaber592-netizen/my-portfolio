"use client";

import React, { useState } from "react";
import { FaTerminal, FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../data/portfolio";

interface InteractiveFloatingProps {
  onTerminalOpen: () => void;
  onChatbotInteract: () => void;
}

export const InteractiveFloating: React.FC<InteractiveFloatingProps> = ({
  onTerminalOpen,
  onChatbotInteract,
}) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: "Hey 👋 I'm Youssef's portfolio assistant. What do you want to know?" },
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleOpenTerminal = () => {
    setIsTerminalOpen(true);
    onTerminalOpen();
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || chatInput;
    if (!query.trim()) return;

    onChatbotInteract();
    const newMessages = [...chatMessages, { sender: "user" as const, text: query }];
    setChatMessages(newMessages);
    if (!textToSend) setChatInput("");

    // Deterministic response engine
    const lower = query.toLowerCase();
    let reply = "I'm not sure about that. Try asking about skills, experience, AWS, or contact info!";

    if (lower.includes("who") || lower.includes("you") || lower.includes("identity")) {
      reply = `I'm Youssef Saber, a Computer Engineering student focused on Cloud Computing, AWS, DevOps, networking, and infrastructure automation.`;
    } else if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
      reply = `My key technical areas are AWS, Linux, Networking (CCNA), Docker, Terraform, CI/CD, C++, Python, Java, and Flutter.`;
    } else if (lower.includes("project")) {
      reply = `Some key projects include CS Platform, Egyptian League (C++), Discrete Mathematics Project, and AWS Cloud Infrastructure experiments.`;
    } else if (lower.includes("aws") || lower.includes("cloud") || lower.includes("devops")) {
      reply = `Youssef builds AWS infrastructure, automates deployments using Terraform and Ansible, and works with Linux, containers, and CI/CD pipelines.`;
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("connect")) {
      reply = `You can connect with Youssef through GitHub, LinkedIn, or Email using the Contact section below.`;
    } else if (lower.includes("cv") || lower.includes("resume")) {
      reply = `You can download Youssef's full resume directly using the 'Request Full CV' button in the Hero section.`;
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Terminal Button Bottom-Left */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={handleOpenTerminal}
          className="flex items-center space-x-2 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 backdrop-blur-md px-3.5 py-2 rounded-full text-xs font-mono text-cyan-400 hover:text-cyan-300 shadow-lg shadow-cyan-950/30 transition-all group"
        >
          <FaTerminal className="text-cyan-400 group-hover:animate-pulse" />
          <span className="hidden sm:inline">WHO DIS? SCANNING...</span>
        </button>
      </div>

      {/* Terminal Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-cyan-500/40 rounded-xl p-6 w-full max-w-lg shadow-2xl shadow-cyan-500/20 font-mono space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-xs text-cyan-400 font-bold">YOUSSEF_TERMINAL.EXE</span>
              <button onClick={() => setIsTerminalOpen(false)} className="text-slate-500 hover:text-white">
                <FaTimes />
              </button>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              <p><span className="text-cyan-500">[SYS]:</span> Portfolio OS initialized...</p>
              <p><span className="text-cyan-500">[SCAN]:</span> Identity verified.</p>
              <p><span className="text-cyan-500">[USER]:</span> {PORTFOLIO_DATA.name}</p>
              <p><span className="text-cyan-500">[ROLE]:</span> {PORTFOLIO_DATA.title}</p>
              <p><span className="text-cyan-500">[STACK]:</span> AWS / Linux / Docker / Terraform</p>
              <p><span className="text-cyan-500">[STATUS]:</span> AVAILABLE FOR WORK</p>
              <p><span className="text-cyan-500">[CHAT]:</span> Personal assistant online.</p>
              <p><span className="text-cyan-500">[MOVE]:</span> Let's talk?</p>
            </div>
            <button
              onClick={() => setIsTerminalOpen(false)}
              className="w-full mt-4 bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/50 text-cyan-400 py-2 rounded-lg text-xs font-bold transition"
            >
              CLOSE SYSTEM [X]
            </button>
          </div>
        </div>
      )}

      {/* Chatbot Button Bottom-Right */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-12 h-12 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-transform active:scale-95"
        >
          <FaComments size={20} />
        </button>
      </div>

      {/* Chatbot Panel */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-[90vw] max-w-sm bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden">
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
            <span className="text-xs font-bold text-cyan-400">Youssef's Assistant</span>
            <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white">
              <FaTimes size={14} />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto space-y-3 text-xs">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-slate-950 font-medium"
                      : "bg-slate-900 text-slate-300 border border-slate-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-slate-800/60 bg-slate-900/40 flex flex-wrap gap-1">
            {["Who are you?", "Skills", "Projects", "AWS", "Contact"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleSendMessage(btn)}
                className="text-[10px] bg-slate-800 hover:bg-slate-700 text-cyan-400 px-2 py-1 rounded"
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-slate-800 flex items-center gap-2 bg-slate-950">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-2 rounded-lg"
            >
              <FaPaperPlane size={12} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};