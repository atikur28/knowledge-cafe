import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

const App = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <Header></Header>

      <Blogs></Blogs>
    </section>
  );
};

export default App;