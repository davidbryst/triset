import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import SkillLayout from './layouts/SkillLayout'
import AchievementLayout from "./layouts/AchievementLayout";
import SkillScreen from "./screens/SkillScreen";
import { MantineProvider } from "@mantine/core";
import Test from "./screens/test";
import Achievement from "./screens/Achievement";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<SkillScreen />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/test" element={<Test />} />
          <Route element={<AchievementLayout />}>
            {/* <Route path='/main/statistics/' element={<StatisticHome/>} /> */}
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
