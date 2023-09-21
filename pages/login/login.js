
import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/`
<style>
    .car-zero-margin {
      margin: 0px;
    }
  </style>
  <div style="margin-left:10%;margin-right: 10%;">
    <div>
      <div style="max-width:700px;">
        <div class="row">
          <div class="col-md-4">
            <h1>Login</h1>
          </div>
          <div class="col-md-6" style="padding-top: 0px;margin-top:0px;">
            <img class="img-fluid" style="width:30%" src="../../images/cars.PNG" alt="cars logo" class="carlogo">
          </div>
        </div>
        <div class="row" style="margin-top: 2em;">
          <div class="col-md-2">
            <label for="username"><b>Username</b></label>
          </div>
          <div class="col-md-8">
            <input type="text" placeholder="Enter Username" id="username" required>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <label for="password"><b>Password</b></label>
          </div>
          <div class="col-md-8">
            <input type="password" placeholder="Enter Password" id="password" required>
          </div>
        </div>
        <div class="row" style="margin-top:2em">
          <div class="col-md-3 d-flex align-items-center">
            <button style="width:100%" class="btn btn-dark car-zero-margin"
              onClick="alert('Implement when you are ready for security')">Login</button>
          </div>
          <div class="col-md-4 d-flex align-items-center">
            <span class="car-zero-margin">Not yet a member
              <a href="/signup" data-navigo>Sign Up </a> </span>
          </div>
          <div class="col-md-4 d-flex align-items-center">
            <button class="btn btn-link car-zero-margin"
              onClick="alert('This is not, and will not be, implemented')">Forgot
              password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`
function runJavaScript(/*add args if required*/) {
//Add your JavaScript here
}

let template
export function initAndGetPage(contentId /*additional args if required here*/) {
//if (template) {
//return addContentToDOM(contentId,template)
//}
template = document.createElement('div')
template.innerHTML = html
//Now the HTML is added to the DOM
addContentToDOM(contentId, template)
//So we can manipulate it with our JavaScript
runJavaScript(/*add args if required*/)
}