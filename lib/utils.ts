import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function speakText(text: string, lang: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return

  window.speechSynthesis.cancel() // Stop any current speech
  
  const utterance = new SpeechSynthesisUtterance(text)
  const voices = window.speechSynthesis.getVoices()
  
  if (lang === 'mr') {
    const marathiVoice = voices.find(v => v.lang.startsWith('mr'))
    if (marathiVoice) utterance.voice = marathiVoice
    utterance.lang = 'mr-IN'
  } else {
    utterance.lang = 'en-US'
  }
  
  utterance.rate = 0.9
  window.speechSynthesis.speak(utterance)
}
