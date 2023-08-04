import { useCallback, useState, useEffect } from "react"


function useGameStatus(rowsCleared, dispatch) {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  const linePoints = [40, 100, 300, 1200]

  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      dispatch({
        type: `STACK_${rowsCleared}`,
        stack: rowsCleared
      })
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1))
      setRows(prev => prev + rowsCleared)
    }
  }, [level, linePoints, rowsCleared])

  useEffect(() => {
    calcScore()
  }, [calcScore, rowsCleared, score])

  return {score, setScore, rows, setRows, level, setLevel}
}

export default useGameStatus