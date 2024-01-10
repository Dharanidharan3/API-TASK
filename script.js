const res=fetch("https://jsonplaceholder.typicode.com/users");
  res.then((data)=>data.json()).then((data1)=>{
  for(var i=0;i<data1.length;i++){
     const div=document.createElement("div")
     div.innerHTML=`
     <div class="row row-cols-1 row-cols-md-2 g-4">
     <div class="col">
       <div class="card">
         <div class="card-body">
           <p class="card-text"><i><b>Name : ${data1[i].name}<i></b></p>
           <p class="card-text"><i>Email : ${data1[i].email}</i></p>
           <p class="card-text"><i>Street : ${data1[i].address.street}</i></p>
           <p class="card-text"><i>City : ${data1[i].address.city}</i></p>
         </div>
       </div>
     </div>
     </div>`
     document.body.append(div);
  }
  })