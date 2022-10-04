import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import Game from './game'

class RootStore {
  isGameStarted = false

  game!: Game

  constructor() {
    makeAutoObservable(this)
  }

  startGame = () => {
    this.game = new Game()
    this.isGameStarted = true
  }
}

export const rootStore = new RootStore()

export const RootStoreContext = createContext<RootStore>(rootStore)
