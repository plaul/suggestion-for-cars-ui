
import { API_URL} from "../../settings.js"
const URL = API_URL+ "/cars"

import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/`
<h3 style="margin-top: 0.5em;min-height: 1em;">Add Car</h3>
<hr />
<form id="form" style="max-width: 800px;">
  <div class="row">
    <div class="col-md-2">
      <label for="brand">Brand</label>
    </div>
    <div class="col-md-10">
      <input id="brand" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-2">
      <label for="model">Model</label>
    </div>
    <div class="col-md-10">
      <input id="model" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-2">
      <label for="model">price (day)</label>
    </div>
    <div class="col-md-4">
      <input type=number id="price-pr-day" required>
    </div>
    <div class="col-md-2">
      <label for="best-discount">
        Best discount
      </label>
    </div>
    <div class="col-md-4">
      <input type=number id="best-discount">
    </div>
  </div>
  <div class="row">
  </div>
  <div class="row">
    <p id="status" style="min-height: 1em;margin-top:0.5em;"> </p>
    <div style="margin-top:2em;">
      <button id="btn-submit-car" class="btn btn-dark">Submit new car</button>
    </div>
  </div>
</form>
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

