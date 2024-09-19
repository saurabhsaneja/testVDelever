import { create } from 'zustand'

const colorStore = create((set) => ({
  color: '#9766FF',
  updateColor: (data) => set((state) => {
    return { color: data }
  }),
}))

export default colorStore;