import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  
get email(){
    return $('id:email')
}

get password(){
    return $('id:password')
}

get btnLogin(){
    return $('id:btnLogin')
}

async login(email,password){
    await this.email.setValue(email)
    await this.password.setValue(password)
    await this.btnLogin.click()
}
    
}

export default new LoginPage();
