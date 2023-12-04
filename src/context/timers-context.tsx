import { type ReactNode, createContext, useContext, useReducer } from 'react'

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

let firstState: TimersState = {
  isRunning: true,
  timers: []
}

type TimerContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimer: () => void;
    stopTimers: () => void;
}

export const TimersContext = createContext<TimerContextValue | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
}

export const useTimersContext = () => {
  const timerCtx = useContext(TimersContext);
  if(timerCtx === null) {
    throw new Error('TimerContext is null- that should not be the case!')
  }

  return timerCtx;
}

const timersReducer = (state: TimersState, action: string) => {

}

const TimersContextProvider = ({children}: TimerContextProviderProps) => {

  const [oloko, olokoMeo] = useReducer(reducer, firstState)

  const ctx: TimerContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData: Timer) {

    },
    startTimer() {
      
    },
    stopTimers() {
      
    },
  }
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  )
}

export default TimersContextProvider;