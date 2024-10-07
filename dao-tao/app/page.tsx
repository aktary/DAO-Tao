"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@/components/ui/button";
import { Bot, Globe, Lock } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function DaoTaoLandingPage() {
  const words = [
    { text: "Revolutionize" },
    { text: "DAO" },
    { text: "Governance" },
    { text: "with" },
    { text: "AI" },
  ];

  const steps = [
    {
      title: "1. Proposal Fetching",
      description:
        "Dao-Tao automatically fetches proposals from your DAO's governance website.",
      link: "#proposal-fetching",
    },
    {
      title: "2. AI-Powered Analysis",
      description:
        "Our advanced LLM processes and analyzes the proposals, determining necessary actions and summarizing key points.",
      link: "#ai-powered-analysis",
    },
    {
      title: "3. Action Planning",
      description:
        "The LLM sends processed information back to Dao-Tao, outlining which functions to call or actions to take.",
      link: "#action-planning",
    },
    {
      title: "4. Secure Transaction Preparation",
      description:
        "Dao-Tao works with the Safe Transaction Service to securely prepare the necessary governance transactions.",
      link: "#secure-transaction-preparation",
    },
    {
      title: "5. Vote Execution",
      description:
        "Dao-Tao executes the vote and sends the result to your DAO's governance smart contract.",
      link: "#vote-execution",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 mr-2" />
          <span className="font-bold">Dao-Tao</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="outline">Launch</Button>
        </nav>
      </header>
      <main className="flex-1">
        <BackgroundBeamsWithCollision>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <TypewriterEffect
                    words={words}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                  />
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Dao-Tao: The AI-powered, cross-chain platform for seamless
                    DAO governance and operations automation.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
        </BackgroundBeamsWithCollision>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardContainer className="inter-var min-h-[300px]">
                <CardBody className="bg-white dark:bg-gray-900 relative group/card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-gray-200 dark:border-gray-700 w-full h-full rounded-xl p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    AI-Powered Proposal Analysis
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    Leverage advanced AI algorithms to analyze proposals,
                    summarize content, and provide data-driven insights for
                    informed decision-making.
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4 flex justify-center"
                  >
                    <Bot className="w-8 h-8 mb-2" />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var min-h-[300px]">
                <CardBody className="bg-white dark:bg-gray-900 relative group/card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-gray-200 dark:border-gray-700 w-full h-full rounded-xl p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Automated Governance Actions
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    Streamline DAO processes with intelligent automation, from
                    proposal fetching to vote execution, saving time and
                    reducing errors.
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4 flex justify-center"
                  >
                    <Globe className="w-8 h-8 mb-2" />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var min-h-[300px]">
                <CardBody className="bg-white dark:bg-gray-900 relative group/card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-gray-200 dark:border-gray-700 w-full h-full rounded-xl p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Secure Transaction Processing
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                  >
                    Integrate with Safe Transaction Service to ensure secure and
                    reliable processing of governance-related transactions.
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4 flex justify-center"
                  >
                    <Lock className="w-8 h-8 mb-2" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How Dao-Tao Works
            </h2>
            <HoverEffect items={steps} />
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold">
                Ready to Revolutionize Your DAO?
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
