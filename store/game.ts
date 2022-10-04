import { makeAutoObservable } from 'mobx'
import { Player } from '../types/game'

export type GameOptions = Partial<{
  totalSteps: number
  isUserFirst: boolean
}>

const defaultOptions: Required<GameOptions> = {
  totalSteps: 120,
  isUserFirst: true,
}

export default class Game {
  totalSteps!: number

  currentStep = 0

  isUserFirst!: boolean

  constructor(options: GameOptions = defaultOptions) {
    makeAutoObservable(this, {
      totalSteps: false,
      isUserFirst: false,
    })

    this.totalSteps = options.totalSteps ?? defaultOptions.totalSteps
    this.isUserFirst = options.isUserFirst ?? defaultOptions.isUserFirst
  }

  get currentPlayer() {
    return this.currentStep % 2 === 0
      ? this.isUserFirst
        ? Player.USER
        : Player
      : this.isUserFirst
      ? Player.AI
      : Player.USER
  }

  get isAIStep() {
    console.log('isAIStep', this.currentPlayer)
    return this.currentPlayer === Player.AI
  }

  get isUserStep() {
    return !this.isAIStep
  }

  step = () => {
    ++this.currentStep
    console.log('step: ', this.currentStep)
  }
}
