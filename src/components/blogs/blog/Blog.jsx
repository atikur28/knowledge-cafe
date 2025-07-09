import Bookmark from '../../../assets/images/icons8-bookmark.svg';

const Blog = ({ blog, handleReadTime, handleBookMarked }) => {
    const { cover, author_img, author, posted_date, reading_time, title, hashtags, } = blog || {};

    return (
        <section className="mb-10">
            <img src={cover} alt={title} className="w-full md:h-[400px] rounded-lg" />
            <section className="flex items-center justify-between mt-5 mb-8">
                <div className="flex items-center gap-5">
                    <img src={author_img} alt={author} className="w-10 md:w-14 rounded-full" />
                    <div>
                        <h3 className="md:text-xl font-semibold mb-1">{author}</h3>
                        <p className="text-gray-500 font-semibold text-[12px]">Posted: {posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <p className="text-gray-500 font-bold md:text-lg">{reading_time} min read</p>
                    <img
                        src={Bookmark}
                        alt="Bookmark"
                        className="w-[20px] md:w-[30px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
                        onClick={() => handleBookMarked(blog)}
                    />
                </div>
            </section>
            <h1 className="text-2xl md:text-4xl mb-5">{title}</h1>
            <div className="flex gap-2 md:gap-5 mb-5 max-w-[300px]">
                {hashtags.map((hashtag, idx) => (<p key={idx} className="text-gray-500 font-bold text-sm md:text-lg">{hashtag}</p>))}
            </div>
            <p className="md:text-lg font-semibold text-[#6047ec] underline mb-6 cursor-pointer transition-all duration-300 hover:text-shadow w-max"
                style={{
                    transition: 'text-shadow 0.3s ease',
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.textShadow = '2px 2px 6px rgba(96, 71, 236, 0.5)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')} 
                onClick={() => handleReadTime(blog)}>Mark as read</p>
            <hr className="text-gray-200" />
        </section>
    );
};

export default Blog;