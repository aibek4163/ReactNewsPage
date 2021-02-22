import { blogs } from "../../data/DataNews";
export function Blogs(props) {
  return blogs.map((value) => {
    return (
      <div class="card mb-3 mt-2" style={{ maxWidth: 600, maxHeight: 200 }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={value.user.picture}
              alt="..."
              width="140"
              height="130"
              style={{ paddingLeft: 15, paddingTop: 15 }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {value.user.name} {value.user.surname}
              </h5>
              <p class="card-text">{value.text}</p>
              <p class="card-text">
                <small class="text-muted">{value.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
