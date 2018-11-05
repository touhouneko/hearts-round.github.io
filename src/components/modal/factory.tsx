import { unmountComponentAtNode } from 'react-dom';

import bindthis from '@/decorators/bindthis';
import './style.css';

class ModalFactory {
  // whenever there is a modal, the historyCount += 1
  private historyCount: number = 0;
  // represents the number of the modal that is current open
  private openCount: number = 0;
  // the z-index for the first modal.
  // the second modal's z-index will be baseZIndex + 1
  private readonly baseZIndex = 999;

  /**
   * @return The container for the modal.
   */
  @bindthis public createFullscreenMask(): HTMLDivElement {
    this.historyCount ++;
    this.openCount ++;
    const container = document.createElement('div');
    container.style.zIndex = (this.baseZIndex + this.historyCount).toString();
    container.classList.add('lt-modal__mask');
    document.getElementsByTagName('body')[0].classList.add('modal-open');
    return container;
  }

  // close the modal in the given container
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