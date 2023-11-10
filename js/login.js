const formLogin = document.querySelector('#formLogin')
const btnIngresar = document.querySelector('#btnIngresar');
const inputUser = document.querySelector('#inputUser');
const inputPassword = document.querySelector('#inputPassword');
    
    formLogin.addEventListener('submit',function(e){
        e.preventDefault();

        let usuario = inputUser.value;
        let contraseña = inputPassword.value;

        if(!usuario || !contraseña){
            alert('Debes ingresar tu usuario y tu contraseña')
        } else{
            let cuentaJSON = {
                "usuario": usuario,
                "contraseña": contraseña,
            }
        
            let cuenta = JSON.stringify(cuentaJSON);
            localStorage.setItem('cuenta', cuenta);
            window.location.href = 'index.html';
        }
        return false;
    });

    let coments = '';
    localStorage.setItem('coments', JSON.stringify(coments));
