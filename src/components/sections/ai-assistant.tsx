'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot, Send, Sparkles, User, AlertCircle, Loader2, MessageCircle,
  X, ShieldCheck, RefreshCw, ChevronDown,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

const suggestedQuestions = [
  'What is Underactive Bladder?',
  'Can UAB be cured?',
  'What is TAC-302?',
  'What is Sacral Neuromodulation?',
  'What is Detrusor Underactivity?',
  'How is UAB diagnosed?',
  'How is UAB different from Overactive Bladder?',
  'What are the symptoms of UAB?',
]

const initialMessage: Message = {
  role: 'assistant',
  content:
    "Hello! I'm the **UAB AI Medical Assistant**. I can help answer your questions about Underactive Bladder (UAB), Detrusor Underactivity, diagnosis, treatments, clinical trials, and emerging therapies.\n\nAsk me a question below, or pick one of the suggested topics to get started.\n\n⚠️ **Important:** This is an educational tool only and is **not a substitute for professional medical advice, diagnosis, or treatment**. Always consult a qualified healthcare professional for medical concerns.",
  timestamp: Date.now(),
}

// Lightweight markdown-to-JSX renderer for chat messages
function renderMarkdown(text: string) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="my-1.5 space-y-1 pl-1">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5 text-sm">
              <span className="w-1 h-1 rounded-full bg-current opacity-60 mt-2 shrink-0" aria-hidden="true" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      )
      listItems = []
    }
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      listItems.push(trimmed.slice(2))
    } else if (/^\d+\.\s/.test(trimmed)) {
      listItems.push(trimmed.replace(/^\d+\.\s/, ''))
    } else {
      flushList()
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h4 key={idx} className="font-bold text-sm mt-2 mb-1 text-foreground">
            {renderInline(trimmed.slice(4))}
          </h4>,
        )
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h3 key={idx} className="font-bold text-base mt-3 mb-1.5 text-foreground">
            {renderInline(trimmed.slice(3))}
          </h3>,
        )
      } else if (trimmed.startsWith('⚠️')) {
        elements.push(
          <p key={idx} className="text-sm font-medium text-amber-700 dark:text-amber-400 my-1.5 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
            {renderInline(trimmed)}
          </p>,
        )
      } else if (trimmed === '') {
        elements.push(<div key={idx} className="h-2" />)
      } else {
        elements.push(
          <p key={idx} className="text-sm leading-relaxed my-1">
            {renderInline(trimmed)}
          </p>,
        )
      }
    }
  })
  flushList()
  return elements
}

function renderInline(text: string): React.ReactNode {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

export function AIAssistant() {
  const [messages, setMessages] = React.useState<Message[]>([initialMessage])
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [showDisclaimer, setShowDisclaimer] = React.useState(true)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMsg: Message = {
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || data.error || 'Sorry, I could not generate a response.',
          timestamp: Date.now(),
        },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I apologize, but I'm having trouble connecting right now. Please try again in a moment. For urgent medical concerns, please contact a healthcare professional directly.",
          timestamp: Date.now(),
        },
      ])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const resetChat = () => {
    setMessages([initialMessage])
    setInput('')
    setShowDisclaimer(true)
  }

  return (
    <section
      id="ai-assistant"
      className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-muted/40 via-background to-background"
      aria-labelledby="ai-assistant-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI-powered support"
          title={
            <>
              Meet your <span className="gradient-text">AI Medical Assistant</span>
            </>
          }
          description="Ask any question about Underactive Bladder — symptoms, diagnosis, treatments, drug pipeline, or clinical trials. Powered by retrieval-augmented generation with citations to trusted medical sources. Always includes a medical disclaimer."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Chat interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <Card className="glass shadow-premium overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/60 bg-gradient-to-r from-[var(--navy)] to-[var(--medical)] text-white">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                        <Bot className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">UAB Medical Assistant</p>
                      <p className="text-[11px] opacity-80 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        AI-powered • Educational only
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetChat}
                    className="text-white hover:bg-white/15 hover:text-white"
                    aria-label="Reset conversation"
                  >
                    <RefreshCw className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                    Reset
                  </Button>
                </div>

                {/* Messages */}
                <div
                  ref={scrollRef}
                  className="h-[460px] overflow-y-auto p-4 space-y-4 bg-background/40"
                  role="log"
                  aria-live="polite"
                  aria-label="Chat messages"
                >
                  <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          'flex gap-3',
                          msg.role === 'user' ? 'justify-end' : 'justify-start',
                        )}
                      >
                        {msg.role === 'assistant' && (
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                        )}
                        <div
                          className={cn(
                            'max-w-[85%] rounded-2xl p-3.5 shadow-soft',
                            msg.role === 'user'
                              ? 'bg-gradient-to-br from-[var(--medical)] to-[var(--teal)] text-white rounded-tr-sm'
                              : 'glass-strong text-foreground rounded-tl-sm',
                          )}
                        >
                          {msg.role === 'assistant' ? (
                            <div className="space-y-1">{renderMarkdown(msg.content)}</div>
                          ) : (
                            <p className="text-sm leading-relaxed">{msg.content}</p>
                          )}
                        </div>
                        {msg.role === 'user' && (
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center">
                            <User className="w-4 h-4 text-foreground" aria-hidden="true" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {loading && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 justify-start"
                      >
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" aria-hidden="true" />
                        </div>
                        <div className="glass-strong rounded-2xl rounded-tl-sm p-4 shadow-soft">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-[var(--medical)]" aria-hidden="true" />
                            <span className="text-sm text-muted-foreground">Researching your question…</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Input */}
                <form
                  onSubmit={handleSubmit}
                  className="border-t border-border/60 p-3 bg-background/60"
                >
                  <div className="flex items-end gap-2">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about UAB symptoms, treatments, drug pipeline, clinical trials…"
                      rows={1}
                      disabled={loading}
                      className="flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--medical)] focus:border-transparent max-h-32 disabled:opacity-60"
                      aria-label="Your question"
                    />
                    <Button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="bg-gradient-to-r from-[var(--navy)] to-[var(--medical)] hover:opacity-90 text-white rounded-xl h-11 w-11 p-0 shrink-0"
                      aria-label="Send message"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </Button>
                  </div>
                  <p className="mt-2 text-[10px] text-muted-foreground flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                    Press Enter to send, Shift+Enter for newline. For educational use only.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Suggested questions */}
            <Card className="glass shadow-soft">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4 text-[var(--medical)]" aria-hidden="true" />
                  <h3 className="font-bold text-sm text-foreground">Suggested Questions</h3>
                </div>
                <div className="space-y-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      disabled={loading}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-3 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-transparent hover:border-border"
                    >
                      <ChevronDown className="w-3 h-3 inline-block mr-1.5 -rotate-90 text-[var(--medical)]" aria-hidden="true" />
                      {q}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer card */}
            <Card className="glass shadow-soft border-l-4 border-l-amber-400">
              <CardContent className="p-5">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">Medical Disclaimer</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The AI Medical Assistant provides educational information only. It does not
                      provide medical advice, diagnosis, or treatment. Always seek the advice of a
                      qualified healthcare provider with any questions about a medical condition.
                      Never disregard professional medical advice because of something you read here.
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                      <strong>Emergency:</strong> If you experience acute urinary retention with
                      severe pain, fever, or inability to void, seek immediate emergency medical care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Capabilities */}
            <Card className="glass shadow-soft">
              <CardContent className="p-5">
                <h3 className="font-bold text-sm text-foreground mb-3">Capabilities</h3>
                <ul className="space-y-2">
                  {[
                    'Explain symptoms and causes',
                    'Walk through diagnostic tests',
                    'Compare treatment options',
                    'Summarize clinical trial status',
                    'Cite reputable sources',
                  ].map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-[var(--medical)] shrink-0" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
