import {Injectable} from '@angular/core';
import {MenuItem} from '../model/model.menu-item';

@Injectable()
export class MenuService {

  getSidebarMenu(): MenuItem[] {
    return [new MenuItem('One','url1')
    , new MenuItem('Two','url2')
    , new MenuItem('Three','url3')];
  }
}
