let endorsementInputBody = document.getElementById('endorsement-input-body');
let endorsementInputFrom = document.getElementById('endorsement-input-from');
let endorsementInputTo = document.getElementById('endorsement-input-to');
let endorsementSubmit = document.querySelector('.endorsement-submit');

let endorsementsList = document.querySelector('.endorsements-list');


endorsementSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  let newEndorsement = endorsementInputBody.value;
  console.log(endorsementsList.innerHTML);
  endorsementsList.innerHTML += 
  `<li class="endorsement-item">
    <p class="endorsement-body">
      ${newEndorsement}    
    </p>
  </li>`;
})

/* to do: 
css: 
  add to, from, likes in each endorsement item
js: 
  create new endorsements with to and from values. 

  save data to local storage 
   - save data to database (firebase)

bonus: 
  delete entries 
  update entries 

*/ 