import { useState, useEffect } from 'react';
import Blog from './blog/Blog';

const Blogs = ({ handleReadTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <section className="lg:w-[65%]">
            {blogs.length === 0 ? (
                <section className="flex flex-col items-center justify-center py-10">
                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                    <p className="mt-4 text-sm font-medium text-blue-600">Loading blogs...</p>
                </section>
            ) : (
                blogs.map(blog => (
                    <Blog key={blog?.id} blog={blog} handleReadTime={handleReadTime}></Blog>
                ))
            )}
        </section>
    );
};

export default Blogs;