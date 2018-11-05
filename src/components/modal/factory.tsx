import { unmountComponentAtNode } from 'react-dom';

import bindthis from '@/decorators/bindthis';
import './style.css';

class ModalFactory {
  private historyCount: number = 0;
  private openCount: number = 0;
  private readonly baseZIndex = 999;

  @bindthis public createFullscreenMask(): HTMLDivElement {
    this.historyCount ++;
    this.openCount ++;
    const container = document.createElement('div');
    container.style.zIndex = (this.baseZIndex + this.historyCount).toString();
    container.classList.add('lt-modal__mask');
    document.getElementsByTagName('body')[0].classList.add('modal-open');
    return container;
  }

  @bindthis public closeModal(container: HTMLDivElement) {
    unmountComponentAtNode(container);
    this.openCount --;
    if (this.openCount === 0)
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
    container.parentNode.removeChild(container);
  }
}

const modalFactory = new ModalFactory();
export default modalFactory;