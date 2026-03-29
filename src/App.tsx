import {ThemeProvider} from "@/components/ThemeProvider"
import { TopAppBar } from "@/components/TopAppBar"

const App = () => {
  return (
    <ThemeProvider>
      <TopAppBar/>
    </ThemeProvider>
  )
}

export default App
