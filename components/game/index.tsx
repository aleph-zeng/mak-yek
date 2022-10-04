import { observer } from 'mobx-react-lite'
import { useGameStore } from '../../store/hooks'

const Game = observer(() => {
  const game = useGameStore()

  return (
    <div>
      <h3>{game.isAIStep ? "AI's turn, please wait..." : 'Your turn'}</h3>
      <button type="button" onClick={() => game.step()}>
        add steps{' '}
      </button>
    </div>
  )
})

export default Game
