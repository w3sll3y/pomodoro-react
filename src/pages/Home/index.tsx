import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomerContainer, MinutsAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

export function Home() {
  return (
    <HomerContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder='De um nome para o seu projeto'
            list='task-suggestions'
          />
          <datalist id='task-suggestions'>
            <option value='Task 1'></option>
            <option value='Task 2'></option>
            <option value='Task 3'></option>
            <option value='Task 4'></option>
          </datalist>

          <label htmlFor="minutAmount">durante</label>
          <MinutsAmountInput
            type="number"
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Comecar
        </StartCountdownButton>
      </form>
    </HomerContainer>
  )
}
