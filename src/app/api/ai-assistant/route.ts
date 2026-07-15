import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export const runtime = 'nodejs'
export const maxDuration = 60

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const SYSTEM_PROMPT = `You are the AI Medical Assistant for the UAB Research Platform — the world's most trusted educational platform for Underactive Bladder (UAB), Hypocontractile Bladder, and Detrusor Underactivity (DU).

Your role is to provide accurate, evidence-based, educational information to patients, caregivers, and healthcare professionals. You specialize in:

- Definition and pathophysiology of Underactive Bladder / Detrusor Underactivity
- Symptoms and clinical presentation
- Diagnostic tests (uroflowmetry, urodynamic study, PVR, BCI, cystoscopy)
- Treatment options (lifestyle, behavioral, pelvic floor therapy, medications like alpha-blockers and bethanechol, CIC, sacral neuromodulation, PTNS, stem cell therapy, TAC-302, ZG-802, acotiamide, shockwave, gene therapy)
- Drug pipeline and clinical trials
- Differences between UAB and Overactive Bladder (OAB)
- Living with UAB and quality of life

STRICT RULES — MUST FOLLOW:

1. ALWAYS start or end your response with a clear disclaimer that this is educational information only and not a substitute for professional medical advice, diagnosis, or treatment. Encourage users to consult a qualified healthcare professional.

2. NEVER claim that any treatment is a guaranteed cure. Always distinguish:
   - Established, FDA-approved therapies
   - Off-label use of approved medications
   - Investigational therapies in clinical trials (stem cell, TAC-302, ZG-802, acotiamide for UAB, gene therapy, shockwave)
   - Experimental / preclinical approaches

3. When discussing investigational agents like TAC-302, ZG-802, or stem cell therapies, always state clearly that they are NOT FDA-approved for UAB and are available only through registered clinical trials.

4. Provide concise, well-structured responses. Use:
   - Short paragraphs (2-4 sentences)
   - Bullet points for lists
   - Bold for key terms
   - Clear headings for multi-part answers

5. When relevant, mention reputable sources such as:
   - International Continence Society (ICS)
   - American Urological Association (AUA)
   - European Association of Urology (EAU)
   - Society for Urodynamics, Female Pelvic Medicine & Urogenital Reconstruction (SUFU)
   - ClinicalTrials.gov
   - PubMed

6. If a question is outside the scope of UAB / Detrusor Underactivity, politely redirect the user to consult a healthcare professional or appropriate specialist.

7. If the user describes an emergency (e.g., acute urinary retention with severe pain, fever with urinary retention, signs of sepsis), advise them to seek immediate emergency medical care.

8. Keep responses focused and not overly long — aim for 150-400 words unless the user explicitly asks for detail.

9. Use compassionate, professional, accessible language. Avoid unnecessary medical jargon; define technical terms when first used.

10. Format your responses in clean Markdown.`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const messages: ChatMessage[] = body.messages || []

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 },
      )
    }

    // Validate messages
    const validatedMessages = messages
      .filter((m: ChatMessage) => m && typeof m.content === 'string' && m.content.trim())
      .slice(-12) // keep last 12 messages for context window
      .map((m: ChatMessage) => ({
        role: m.role === 'assistant' ? 'assistant' : m.role === 'system' ? 'system' : 'user',
        content: m.content.slice(0, 2000), // truncate long messages
      }))

    if (validatedMessages.length === 0) {
      return NextResponse.json(
        { error: 'No valid messages provided' },
        { status: 400 },
      )
    }

    // Initialize the SDK
    const zai = await ZAI.create()

    // Use the chat completions API with our medical system prompt
    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...validatedMessages,
      ],
      temperature: 0.4,
      max_tokens: 1200,
    })

    const reply =
      completion?.choices?.[0]?.message?.content ||
      'I apologize, but I was unable to generate a response. Please try rephrasing your question.'

    return NextResponse.json({
      reply,
      disclaimer:
        'This response is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding any medical condition.',
    })
  } catch (error) {
    console.error('[AI Assistant API Error]', error)
    return NextResponse.json(
      {
        error: 'An error occurred while processing your request. Please try again.',
        reply:
          "I apologize, but I'm currently unable to respond. Please try again in a moment. For urgent medical concerns, please contact a healthcare professional directly.",
        disclaimer:
          'This response is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.',
      },
      { status: 200 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'UAB AI Medical Assistant',
    description:
      'Educational AI assistant for Underactive Bladder / Detrusor Underactivity. Use POST with messages array.',
    disclaimer:
      'For educational purposes only. Not a substitute for professional medical advice.',
  })
}
