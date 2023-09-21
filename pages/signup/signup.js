import { API_URL} from "../../settings.js"
const URL = API_URL + "/members"

import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/`
<h3 style="margin-top: 0.5em;min-height: 1em;">Sign up with Car's 'R' Us</h3>
<hr />
<div>
  <form id="form" style="max-width: 900px;">
    <div class="row">
      <div class="col-md-2 ">
        <label for="input-username">User Name</label>
      </div>
      <div class="col-md-3">
        <input id="input-username" required>
      </div>
      <div class="col-md-2 ">
        <label for="input-email">Email</label>
      </div>
      <div class="col-md-5">
        <input id="input-email" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 ">
        <label for="input-password">Password</label>
      </div>
      <div class="col-md-3">
        <input type=password id="input-password" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 ">
        <label for="input-firstname">First Name</label>
      </div>
      <div class="col-md-3">
        <input id="input-firstname">
      </div>
      <div class="col-md-2 ">
        <label for="input-lastname">Last Name</label>
      </div>
      <div class="col-md-5">
        <input id="input-lastname" ">
      </div>
    </div>
    <div class=" row">
        <div class="col-md-2 ">
          <label for="input-street">Street</label>
        </div>
        <div class="col-md-10">
          <input id="input-street">
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 ">
          <label class="col-md-2" for="input-city">City</label>
        </div>
        <div class="col-md-4">
          <input id="input-city">
        </div>
        <div class="col-md-1 ">
          <label for="input-zip">Zip</label>
        </div>
        <div class="col-md-5">
          <input id="input-zip">
        </div>
      </div>
      <div class="row">
        <p id="status" style="min-height: 1em;margin-top:0.5em"> </p>
      </div>
      <div class="row" style="margin-top:2em;">
        <button id="btn-submit-car" class="btn btn-dark">Register</button>
        &nbsp;
        <a id="goto-login" href="/login" data-navigo style="display:none">Go to login?</a>
      </div>
  </form>
</div>
`
function runJavaScript() {
//Add your JavaScript here
}

let template
export function initAndGetPage(contentId /*additional args if required here*/) {
//if (template) {
//return addContentToDOM(contentId,template)
//}
template = document.createElement('div')
template.innerHTML = html

addContentToDOM(contentId, template)
runJavaScript(/*add args if required*/)
}

