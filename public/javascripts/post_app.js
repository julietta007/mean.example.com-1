function viewIndex(){
  var url = 'http://localhost:3000/api/post';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = function(){

      let data = JSON.parse(xhr.response);

      var rows = '';

      for(var i=0; i<data['post'].length; i++){

        let thisn = data['post'][i];
        let user_id=thisn.user_id;
        let title=thisn.title;
        let body=thisn.body;
        let description=thisn.description;

        rows = rows + `<tr>
          <td><a href="#edit-${id}" onclick="viewUser('${id}')">${name}</a></td>
          <td>${username}</td>
          <td>${email}</td>
        </tr>`;

      }

      var app = document.getElementById('app');
      app.innerHTML = `<table class="table">
        <thead>
          <tr>
            <th>User_Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Description</th>

          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  }
}


function viewUser(who){

  var url = 'http://localhost:3000/api/post/view/' + who;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = function(){

    var app = document.getElementById('app');


    let data = JSON.parse(xhr.response);

    app.innerHTML = `<h2>${data.user[0].last_name}, ${data.user[0].first_name}</h2>
      <table class="table">
        <tbody>
          <tr><th>User_Id </th><td>${data.user[0].user_id}</td></tr>
          <tr><th>Title </th><td>${data.user[0].title}</td></tr>
          <tr><th>Body </th><td>${data.user[0].body}</td></tr>
          <tr><th>Description </th><td>${data.user[0].description}</td></tr>
        </tbody>
      </table>

      <h3>Edit the User Record</h3>
      <form id="editUser" action="/post/edit" method="post">
        <input type="hidden" name="_id" value="${data.user[0]._id}">
        <div>
          <label for="user_id">User_Id</label>
          <input type="text" value="${data.user[0].user_id}" name="user_id" id="user_id">
        </div>

        <div>
          <label for="title">Title</label>
          <input type="text" value="${data.user[0].title}" name="title" id="title">
        </div>

        <div>
          <label for="body">Body</label>
          <input type="text" value="${data.user[0].body}" name="body" id="body">
        </div>

        <div>
          <label for="description">Description</label>
          <input type="text" value="${data.user[0].description}" name="description" id="description">
        </div>
        <input type="submit" value="Submit">
      </form>
    `;

    var editUser = document.getElementById('editUser');

    editUser.addEventListener('submit', function(e){
      e.preventDefault();

      formData = new FormData(editUser);
      var url = 'http://localhost:3000/api/post/edit';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);

      //Be sure to add a ajson header to form, otherwise body parser will freak out
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

      //Convert formData to JSON
      var object = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });

      xhr.send(JSON.stringify(object));

      xhr.onload = function(){
        let data = JSON.parse(xhr.response);

        if(data.success == true){
          viewIndex();
        }
      }
    });
  }

}

function createUser(){

  var app = document.getElementById('app');

  app.innerHTML = `<h2>Create a New User</h2>
    <form id="createUser" action="/api/post/create" method="post">
      <div>
        <label for="user_id">User_Id</label>
        <input type="text" name="user_id" id="user_id">
      </div>

      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
      </div>

      <div>
        <label for="body">Body</label>
        <input type="text" name="body" id="body">
      </div>

      <div>
        <label for="description">Description</label>
        <input type="text" name="description" id="description">
      </div>
      <input type="submit" value="Submit">
    </form>
  `;

  var createUser = document.getElementById('createUser');
  createUser.addEventListener('submit', function(e){
    e.preventDefault();

    formData = new FormData(createUser);
    var url = 'http://localhost:3000/api/post/create';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    //Be sure to add a ajson header to form, otherwise body parser will freak out
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    //Convert formData to JSON
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });

    xhr.send(JSON.stringify(object));
    xhr.onload = function(){
      let data = JSON.parse(xhr.response);

      if(data.success == true){
        viewIndex();
      }
    }
  });
}

//Onload view index
viewIndex();

//If the inital page load has a hash, look up that user
var hash = window.location.hash.substr(1);
if(hash){

  let chunks = hash.split('-');

  if(chunks[0]=='edit'){
    viewUser(chunks[1]);
  }

  //if(chunks[0]=='create'){
  //  createUser();
  //}

}
