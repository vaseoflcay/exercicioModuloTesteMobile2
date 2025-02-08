import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage  {
  
    async profileName(Name){

      return $(`//android.widget.TextView[@text="${Name}"]`)
    }
  
    
}

export default new ProfilePage();
