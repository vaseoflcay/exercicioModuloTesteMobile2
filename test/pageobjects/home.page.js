import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage  {
  
    async openMenu(menu){
      await $(`id:tab-${menu}`).click()
    }
  
    
}

export default new HomePage();
