import "../components/footer.css"
export function Footer(props) {
    return (
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>E-Shopping</h6>
              <p class="text-justify">E-Shopping site. Easy to buy and cheap.</p>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Contacts</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Tel +123456789
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Tel +123456789
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Kazakhstan, Zaysan
                  </a>
                </li>
              </ul>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>FAQ</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">Feedback</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">About Creators</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <a href="#"> Nurlanov Aibek</a>.
              </p>
            </div>
  
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="dribbble" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }