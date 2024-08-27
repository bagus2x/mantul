import { Mail } from '@mantul/app/[lang]/(admin)/email/data'
import { create } from 'zustand'

interface EmailState {
  selectedId: Mail['id'] | null
  selectMail: (id: Mail['id']) => void
}

export const useEmail = create<EmailState>((set) => ({
  selectedId: null,
  selectMail: (id: Mail['id']) => set((state) => ({ ...state, selectedId: id })),
}))
