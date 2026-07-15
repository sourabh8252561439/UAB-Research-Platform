'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DiagramCardProps {
  title: string
  description?: string
  badge?: string
  children: React.ReactNode
  className?: string
}

export function DiagramCard({ title, description, badge, children, className }: DiagramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`glass shadow-premium overflow-hidden text-foreground ${className || ''}`}>
        <CardContent className="p-0">
          <div className="p-5 pb-3 flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-base text-foreground leading-tight">{title}</h3>
              {description && (
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
              )}
            </div>
            {badge && (
              <Badge variant="secondary" className="bg-[var(--medical)]/10 text-[var(--medical)] border border-[var(--medical)]/20 text-[10px] font-semibold shrink-0">
                {badge}
              </Badge>
            )}
          </div>
          <div className="px-3 pb-4">
            <div className="rounded-xl bg-gradient-to-br from-muted/30 to-background p-3 border border-border/40">
              {children}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
