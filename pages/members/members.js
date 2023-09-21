import { API_URL } from "../../settings.js"
const URL = API_URL + "/members"

import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/`
<style>
    row.div,
    span {
      font-weight: bold;
    }
  </style>

  <div>
    <h3>All Members</h3>
    <table class="table" style="max-width:1000px;">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Name</th>
          <th>Ranking</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody id="tbl-body">
      </tbody>
    </table>
    <p id="error" style="color:red"></p>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="member-details-modal" tabindex="-1" aria-labelledby="modal-label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="member-content"></div>
          <div class="row">
            <div class="col-md-3"><span>Username:</span></div>
            <div class="col-md-9">
              <p id="user-name"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>email:</span></div>
            <div class="col-md-9">
              <p id="email"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>First name:</span></div>
            <div class="col-md-9">
              <p id="first-name"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>Last name:</span></div>
            <div class="col-md-9">
              <p id="last-name"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>Street:</span></div>
            <div class="col-md-9">
              <p id="street"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>City:</span></div>
            <div class="col-md-9">
              <p id="city"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>Zip:</span></div>
            <div class="col-md-9">
              <p id="zip"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>Created:</span></div>
            <div class="col-md-9">
              <p id="created"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>Edited:</span></div>
            <div class="col-md-9">
              <p id="edited"></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><span>Ranking:</span></div>
            <div class="col-md-9">
              <p id="ranking"></p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`
function runJavaScript() {
//Add your JavaScript here
}

let template
export function initAndGetPage(contentId) {
//if (template) {
//return addContentToDOM(contentId,template)
//}
template = document.createElement('div')
template.innerHTML = html
addContentToDOM(contentId, template)
runJavaScript(/*add args if required*/)
}