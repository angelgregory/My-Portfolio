import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import favicon from "./assets/greg-favicon.png"
function App() {
   return (
      <div className="">
         {/* NAVBAR SECTION */}
         <Helmet>
            <title>Angel Gregory Portfolio</title>
            <meta name="description" content="Tutorial for React Helmet" />
            <meta name="theme-color" content="#E6E6FA" />
            <link
               rel="icon"
               type="image/png"
               href={favicon}
               sizes="16x16"
            />
         </Helmet>
         <Navbar />
         <Hero />
      </div>
   );
}

export default App;
