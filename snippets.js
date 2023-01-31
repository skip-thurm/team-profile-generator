    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EMPLOYEES</title>
    </head>
    <body>
        <div>
    `
    employeeArray.forEach((employee) => {
        switch (employee.getRole()){
            case "Manager":
                html += createManagerHTML(employee);
                break;
            // case "Engineer"
            default:
                html += createManagerHTML(employee);
        }
    })

    `
    </div>
    </body>
    </html>
    `


    `
    <!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    
        <title>The Team</title>
    
    </head>
    
    <body>
    
        <div>
            <h1>
    THE TEAM
            </h1>
        </div>
    
        <div class="p-3 mb-2 bg-primary text-white border border-dark rounded">
`
    employeeArray.forEach((employee) => {
        switch (employee.getRole()) {
            case "Manager":
                html += createManagerHTML(employee);
                break;
            // case "Engineer"
            default:
                html += createManagerHTML(employee);
        }
    })

`
    </div>
    
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
`


// ${employeeArray.forEach((employee) => {
//     console.log(employee);
//     console.log(employee.getRole());
//     console.log(createManagerHTML(employee));
//     switch (employee.getRole()) {
//         case "Manager":
//             return createManagerHTML(employee)
//         default:
//             break;
//     }
// })
// }