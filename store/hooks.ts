import { useContext } from 'react'
import { RootStoreContext } from '.'

export function useRootStore() {
  return useContext(RootStoreContext)
}

export function useGameStore() {
  const rootStore = useRootStore()

  return rootStore.game
}
