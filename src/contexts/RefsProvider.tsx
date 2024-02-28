import { ReactNode, createContext, useRef } from "react";

interface RefsContextProps {
  homeRef: React.MutableRefObject<HTMLElement | null>;
  servicesRef: React.MutableRefObject<HTMLElement | null>;
  packsRef: React.MutableRefObject<HTMLElement | null>;
  feedbacksRef: React.MutableRefObject<HTMLElement | null>;
  beeflixRef: React.MutableRefObject<HTMLElement | null>;
}

export const RefsContext = createContext<RefsContextProps>({
  homeRef: { current: null},
  servicesRef: { current: null},
  packsRef: { current: null},
  feedbacksRef: { current: null},
  beeflixRef: { current: null}
});

export const RefsProvider = ({ children }: { children: ReactNode }) => {
  const homeRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const packsRef = useRef<HTMLElement | null>(null);
  const feedbacksRef = useRef<HTMLElement | null>(null);
  const beeflixRef = useRef<HTMLElement | null>(null);

  return (
    <RefsContext.Provider value={{
      homeRef,
      servicesRef,
      packsRef,
      feedbacksRef,
      beeflixRef
    }}>
      {children}
    </RefsContext.Provider>
  )
}