'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Globe, Lock, Zap, Database, Vote, FileText } from "lucide-react"
import Link from "next/link"

export function DaoTaoLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 mr-2" />
          <span className="font-bold">Dao-Tao</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize DAO Governance with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dao-Tao: The AI-powered, cross-chain platform for seamless DAO governance and operations automation.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Bot className="w-8 h-8 mb-2" />
                  <CardTitle>AI-Powered Proposal Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage advanced AI algorithms to analyze proposals, summarize content, and provide data-driven insights for informed decision-making.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2" />
                  <CardTitle>Automated Governance Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  Streamline DAO processes with intelligent automation, from proposal fetching to vote execution, saving time and reducing errors.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="w-8 h-8 mb-2" />
                  <CardTitle>Secure Transaction Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  Integrate with Safe Transaction Service to ensure secure and reliable processing of governance-related transactions.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How Dao-Tao Works</h2>
            <div className="grid grid-cols-1 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Proposal Fetching</h3>
                <p className="text-gray-500 dark:text-gray-400">Dao-Tao automatically fetches proposals from your DAO's governance website.</p>
                <h3 className="text-xl font-bold">2. AI-Powered Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">Our advanced LLM processes and analyzes the proposals, determining necessary actions and summarizing key points.</p>
                <h3 className="text-xl font-bold">3. Action Planning</h3>
                <p className="text-gray-500 dark:text-gray-400">The LLM sends processed information back to Dao-Tao, outlining which functions to call or actions to take.</p>
                <h3 className="text-xl font-bold">4. Secure Transaction Preparation</h3>
                <p className="text-gray-500 dark:text-gray-400">Dao-Tao works with the Safe Transaction Service to securely prepare the necessary governance transactions.</p>
                <h3 className="text-xl font-bold">5. Vote Execution</h3>
                <p className="text-gray-500 dark:text-gray-400">Dao-Tao executes the vote and sends the result to your DAO's governance smart contract.</p>
              </div>
              <div className="flex justify-center">
                <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-4">
                  ```mermaid title="Dao-Tao Workflow" type="diagram"
                  graph TD
                    A["Dao-Tao"] -->|Fetches proposals| B["Governance Website"]
                    A -->|Sends proposals| C["LLM (AI)"]
                    C -->|Processed information| A
                    A -->|Prepares transactions| D["Safe Transaction Service"]
                    D -->|Secure transactions| A
                    A -->|Executes vote| E["DAO Governance Contract"]
                  