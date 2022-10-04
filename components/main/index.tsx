import { observer } from 'mobx-react-lite'
import { rootStore, RootStoreContext } from '../../store'
import { useRootStore } from '../../store/hooks'
import Form from '../form'
import Game from '../game'

const MainContent = observer(() => {
  const { isGameStarted } = useRootStore()

  return (
    <main className="flex items-center justify-center py-5">
      {isGameStarted && <Game />}
      {!isGameStarted && <Form />}
    </main>
  )
})

const Main = () => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <MainContent />
    </RootStoreContext.Provider>
  )
}

export default Main
