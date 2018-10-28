import * as React from 'react';

import bindthis from '@/decorators/bindthis';

interface IProp {
  className?: string;
  listener: (ev: MouseEvent) => any;
}
export default class OutsideClickListener extends React.Component<IProp> {
  private wrapperRef: React.RefObject<HTMLDivElement> = null;
  public static defaultProps: IProp = {
    className: '',
    listener: () => {}
  }
  constructor(props: IProp) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  public render() {
    return (
      <div className={this.props.className} ref={this.wrapperRef}>
        {this.props.children}
      </div>
    );
  }
  public componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }
  @bindthis private handleClick(ev: MouseEvent) {
    if (this.wrapperRef === null)
      return;
    else if (this.wrapperRef.current === null || this.wrapperRef.current === undefined)
      return;
    else if (!this.wrapperRef.current.contains(ev.target as Node))
      this.props.listener(ev);
  }
}