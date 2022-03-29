import { useEffect, useState } from "react";
import { ArticleComponent } from "./ArticleComponent";
import { ArticleSkeleton } from "./ArticleSkeleton";
import axios from "axios";

export const Content = () => {
  const [articles, setArticles] = useState("");

  useEffect(() => {
    const fetchData = () => {
      if (articles != null) {
        axios.get("https://dev.to/api/articles").then((res) => {
          setArticles([...articles, ...res.data]);
        });
      }
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight =
        "innerHeight" in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log("we reached the bottom");
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

  useEffect(() => {
    setTimeout(async () => {
      axios.get("https://dev.to/api/articles").then((res) => {
        console.log(res.data);
        setArticles(res.data);
      });
    }, 2000);
  }, []);

  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="#">Feed</a>
          <a href="#">Week</a>
          <a href="#">Month</a>
          <a href="#">Infinity</a>
          <a href="#">Latest</a>
        </nav>
      </header>

      <div className="articles">
        {articles &&
          articles.map((article, id) => {
            return <ArticleComponent key={id} data={article} />;
          })}

        {!articles && [1, 2, 3, 4, 5].map((a) => <ArticleSkeleton key={a} />)}
      </div>
    </main>
  );
};
