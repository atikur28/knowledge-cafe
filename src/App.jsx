import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";
import { useState } from 'react';

const App = () => {
  const [totalReadTime, setTotalReadTime] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const handleReadTime = (blog) => {
    const isAlreadyBookmarked = bookmarked.some(b => b.id === blog.id);
    if (!isAlreadyBookmarked) {
      setTotalReadTime(prevTime => prevTime + blog?.reading_time);
      setBookmarked(prev => [...prev, blog]);
    } else {
      setToastMessage('⚠️ Blog is already bookmarked!');
      setTimeout(() => setToastMessage(''), 3000);
    }
  }

  return (
    <section className="max-w-[1440px] mx-auto">
      {toastMessage && (
        <div className="fixed top-5 right-5 bg-red-100 border border-red-300 shadow-lg px-4 py-3 rounded-md transition-all duration-300 z-50">
          {toastMessage}
        </div>
      )}

      <Header />

      <section className="flex flex-col lg:flex-row gap-5 mx-3 md:mx-10 mt-5">
        {/* Part 1 */}
        <Blogs handleReadTime={handleReadTime} />

        {/* Part 2 */}
        <section className="lg:w-[35%]">
          <h4 className="text-[#6951ed] text-xl font-semibold text-center border-2 border-[#6951ed] rounded-lg py-4 hover:bg-[#efedfd] cursor-pointer">
            Spent time on read: {totalReadTime} min
          </h4>

          <div className="py-4 px-5 bg-gray-100 rounded-lg mt-5">
            <h4 className="text-lg md:text-xl font-semibold">Bookmarked Blogs : {bookmarked.length}</h4>
            <div>
              {bookmarked.map((bookmark) => (
                <h4
                  key={bookmark.id}
                  className="py-4 px-5 bg-white md:text-lg font-semibold rounded-lg my-3"
                >
                  {bookmark?.title}
                </h4>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default App;