// src/pages/Blog.tsx

import React, { useState, useEffect } from 'react';

interface Post {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail: string;
  categories: string[];
  content: string;
  [key: string]: any;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const rssUrl = 'https://medium.com/feed/@Ric_Royal';
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssUrl
        )}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
          const postsWithStaticImage = data.items.map((item: any): Post => {
            const post: Post = {
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              contentSnippet: item.contentSnippet,
              thumbnail: `${process.env.PUBLIC_URL}/images/hero-background.jpg`, // Static image
              categories: item.categories,
              content: item.content,
            };
            return post;
          });

          setPosts(postsWithStaticImage);
          setFilteredPosts(postsWithStaticImage);

          // Extract unique categories
          const uniqueCategories = Array.from(
            new Set(
              postsWithStaticImage.flatMap((post: Post) => post.categories)
            )
          ) as string[];

          setCategories(uniqueCategories);
        } else {
          console.error('Error fetching blog posts:', data.message);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterPosts(query, selectedCategory);
  };

  // Handle category filter changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterPosts(searchQuery, category);
  };

  // Filter posts based on search query and selected category
  const filterPosts = (query: string, category: string) => {
    let filtered = posts;

    if (category) {
      filtered = filtered.filter((post) =>
        post.categories.includes(category)
      );
    }

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.contentSnippet.toLowerCase().includes(lowerCaseQuery)
      );
    }

    setFilteredPosts(filtered);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Blog</h2>
      <p className="mb-8 text-center text-lg text-gray-300">
        Latest articles and insights related to my personal interests:
      </p>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded mb-4 md:mb-0"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold text-white hover:underline">
                    {post.title}
                  </h3>
                </a>
                <p className="text-gray-400 text-sm">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <div className="mt-2">
                  <p className="text-gray-200 text-base">
                    {post.contentSnippet}
                  </p>
                </div>
                {post.categories && post.categories.length > 0 && (
                  <div className="mt-4">
                    {post.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-purple-700 text-white text-xs px-2 py-1 rounded-full mr-2"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
