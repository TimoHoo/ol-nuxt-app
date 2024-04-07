//export const useCounter = () => useState<number>('counter', () => 0)
//export const useColor = () => useState<string>('color', () => 'pink')

export const useSidePanelisOpen = () => {
    return useState<boolean>('SidePanelisOpen', () => false)
}

export const useTargetCardisOpen = () => {
    return useState<boolean>('TargetCardisOpen', () => false)
}
