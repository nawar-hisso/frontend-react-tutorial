const Home = () => {
  const blogs = [
    {
      _id: 1,
      title: 'First Blog',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Nawar Hisso',
    },
    {
      _id: 2,
      title: 'Second Blog',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Adam Boudjema',
    },
    {
      _id: 3,
      title: 'Third Blog',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Karthik Kumar',
    },
  ];

  return (
    <>
      <nav className="navbar">
        <h1>ReactJs Tutorial Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a
            href="/create"
            style={{
              color: 'white',
              backgroundColor: '#f1356d',
              borderRadius: '8px',
            }}
          >
            New Blog
          </a>
        </div>
      </nav>
      <div className="content">
        <div className="home">
          {blogs && (
            <div className="blog-list">
              {blogs.map(blog => (
                <div key={blog._id} className="blog-preview">
                  <h2>{blog.title}</h2>
                  <p>
                    <b>Written by {blog.author}</b>
                  </p>
                  <p>{blog.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
