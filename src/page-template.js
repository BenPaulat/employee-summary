const render = teamMembersArr => { 
    let team = ''

    for (i = 0; i < teamMembersArr.length; i++) {        
        let role = teamMembersArr[i].getRole()
        let info
        if (role === 'Manager') {
            info = teamMembersArr[i].officeNumber
        } else if (role === 'Engineer') {
            info = `<a href='https://github.com/${teamMembersArr[i].github}'>${teamMembersArr[i].github}</a>`
        } else if (role === 'Intern') {
            info = teamMembersArr[i].school
        } else {
            console.log('This role is not defined');
        };

        team = team + `
        <div>
            <h2 class='title'>
                <div class='name'>${teamMembersArr[i].name}</div>
                <div class='role'>${role}</div>
            </h2>
            <article class='description'>
                <div class='id'>${teamMembersArr[i].id}</div>
                <div class='email'>
                    <a href='mailto:${teamMembersArr[i].email}'>${teamMembersArr[i].email}</a>
                </div>
                <div class='info'>${info}</div>
            </article>
        </div>
    `}

    
};

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Work Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
            <section>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                        ${render(team)}
                    </div>
                </div>
            </div>
            </section>
    </body>
    </html>`
}