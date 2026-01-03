import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
    user: string | null;
    age: number,
    addUser: (user: string) => void;
    removeUser: () => void;
};

export const useUser = create<UserState>()(
persist(
    (set) => ({
        user: null,
        age: 26,
        addUser: (payload: string) => set({ user: payload }),
        removeUser: () => set(() => ({ user: null }))
    }),
    {
        name: 'user-storage'
    }
)
)
