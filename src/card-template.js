const cardcreate = (name, position, ID) =>{
return `
<section class = 'card col-2 '>
    <div class="card-header text-center bg-primary text-dark ">${name}<br>${position}</div>
    <div class=" card-body justify-center">
        <ul>
            <li>ID:${ID}</li>
            <li>Email:${name.replace(/\s+/g,'')}${ID}@myteam.com</li>
            <li>Github:${name.replace(/\s+/g,'')}</li>
        </ul>
    </div>
  </section>`
}

module.exports = templateData=>{
    const{name,position,ID}=templateData;
    return`
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My team </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row =r py-3 px-4 justify-center">
       <h1 class="page-title">My Team</h1> 
      </div>
    </header>
    <main class="container flex-row my-5 mx-3 justify-space-around">
    ${cardcreate(name,position,ID)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by bootcamp<br>I copy and paste, then have some fun  </h3>
    </footer>
  </body>
  </html>`};