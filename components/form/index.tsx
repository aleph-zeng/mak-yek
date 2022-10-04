import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../store/hooks'

const Form = observer(() => {
  const { startGame } = useRootStore()

  return (
    <div>
      <button onClick={startGame} className="px-6 py-3 font-semibold rounded-md bg-black text-white hover:bg-black/80">
        Start Game
      </button>
    </div>
  )
})

export default Form
