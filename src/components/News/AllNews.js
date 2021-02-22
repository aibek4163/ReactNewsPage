import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { users } from "../../data/DataUsers";
import { MainBody } from "../MainBody/MainBody";
import { news, blogs } from "./../../data/DataNews";

export function AllNews(props) {
  console.log(props.type);
  const filteredNews = [];
  for (let i in news) {
    if (news[i].category === props.type) {
      filteredNews.push(news[i]);
    }
    if (props.type === undefined) {
      filteredNews.push(news[i]);
    }
  }
  return filteredNews.map((value) => {
    return (
      <>
        <div class="card mb-3 mt-2" style={{ maxWidth: 650, maxHeight: 400 }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src={value.url}
                alt="..."
                width="200"
                height="130"
                style={{ paddingTop: 10, paddingLeft: 10 }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{value.title}</h5>
                <p class="card-text">{value.description}</p>
                <p class="card-text">
                  <small class="text-muted">{value.date}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
}

export function AddNews(props) {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    news.push({
      title: title,
      description: description,
      url: url,
      category: category,
      date: new Date().toLocaleDateString(),
    });
    history.push("/");
    console.log(news);
  }

  function handleChange(e) {
    let title_new, description_new, url_new, category_new;
    if (e.target.name === "title") {
      title_new = e.target.value;
      setTile(title_new);
    } else if (e.target.name === "description") {
      description_new = e.target.value;
      setDescription(description_new);
    } else if (e.target.name === "url") {
      url_new = e.target.value;
      setUrl(url_new);
    } else if (e.target.name === "category") {
      category_new = e.target.value;
      setCategory(category_new);
    }

    console.log(title_new, description_new, url_new, category_new);

    //console.log(news);
  }

  return (
    <>
      <div className="container">
        <div className="offset-4 col-4 mt-5">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Title of News</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Url of Picture</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="url"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Category</label>
              <select
                name="category"
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
              >
                <option value="sports">Sport</option>
                <option value="politics">Politics</option>
                <option value="technologies">Technology</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button
              type="submit"
              class="btn btn-sm text-white"
              style={{ backgroundColor: "#016064" }}
            >
              ADD NEWS
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export function AddBlogs(props) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [blog, setBlog] = useState("");
  const [url, setUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    blogs.push({
      user: {
        name: props.userObj.name,
        surname: props.userObj.surname,
        picture: props.userObj.picture,
      },
      text: blog,
      date: new Date().toLocaleDateString(),
    });
    console.log(blogs);
    history.push("/");
  }

  function handleChange(e) {
    let blog_new;
    if (e.target.name === "blog") {
      blog_new = e.target.value;
      setBlog(blog_new);
    }

    console.log(blog_new);

    //console.log(news);
  }
  return (
    <>
      <div className="container">
        <div className="offset-4 col-4 mt-5">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputPassword1">Blog text</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="blog"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              class="btn btn-sm text-white"
              style={{ backgroundColor: "#016064" }}
            >
              ADD BLOG
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export function Sport(props) {
  return news.map((value) => {
    if (value.category === "Sport") {
      return (
        <>
          <div class="card mb-3 mt-2" style={{ maxWidth: 650, maxHeight: 400 }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={value.url}
                  alt="..."
                  width="200"
                  height="130"
                  style={{ paddingTop: 10, paddingLeft: 10 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{value.title}</h5>
                  <p class="card-text">{value.description}</p>
                  <p class="card-text">
                    <small class="text-muted">{value.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
}

export function Business(props) {
  return news.map((value) => {
    if (value.category === "Business") {
      return (
        <>
          <div class="card mb-3 mt-2" style={{ maxWidth: 650, maxHeight: 400 }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={value.url}
                  alt="..."
                  width="200"
                  height="130"
                  style={{ paddingTop: 10, paddingLeft: 10 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{value.title}</h5>
                  <p class="card-text">{value.description}</p>
                  <p class="card-text">
                    <small class="text-muted">{value.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
}

export function Politics(props) {
  return news.map((value) => {
    if (value.category === "Politics") {
      return (
        <>
          <div class="card mb-3 mt-2" style={{ maxWidth: 650, maxHeight: 400 }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={value.url}
                  alt="..."
                  width="200"
                  height="130"
                  style={{ paddingTop: 10, paddingLeft: 10 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{value.title}</h5>
                  <p class="card-text">{value.description}</p>
                  <p class="card-text">
                    <small class="text-muted">{value.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
}

export function Technology(props) {
  return news.map((value) => {
    if (value.category === "Technology") {
      return (
        <>
          <div class="card mb-3 mt-2" style={{ maxWidth: 650, maxHeight: 400 }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={value.url}
                  alt="..."
                  width="200"
                  height="130"
                  style={{ paddingTop: 10, paddingLeft: 10 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{value.title}</h5>
                  <p class="card-text">{value.description}</p>
                  <p class="card-text">
                    <small class="text-muted">{value.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
}
