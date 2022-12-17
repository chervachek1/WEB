function load_data() {
  fetch("https://randomuser.me/api")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = placeholder.innerHTML;
    for(let item of data.results){
        out = `
          <tr class="people_data">
            <td class="tg-c3ow"><img src="${item.picture.large}" width="400" height="300"><br>
            <span style="font-weight:bold">City:</span> ${item.location.city}<br>
            <span style="font-weight:bold">Country:</span> ${item.location.country}<br>
            <span style="font-weight:bold">Postcode:</span> ${item.location.postcode}<br>
            <span style="font-weight:bold">Email:</span>${item.email}</td>
          </tr>
        ` + out;
    }
  
    placeholder.innerHTML = out;
  });
}