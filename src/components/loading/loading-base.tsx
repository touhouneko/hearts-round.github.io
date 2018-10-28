import * as React from 'react';

import './style-base.css';

interface IBaseLoadingProps {
  className?: string;
}

const BaseLoading = ({ className = '' }: IBaseLoadingProps) => (
  <div className={`lt-loading__container ${className}`}>
    <div className="lt-loading__rect lt-loading__rect--0"></div>
    <div className="lt-loading__rect lt-loading__rect--1"></div>
    <div className="lt-loading__rect lt-loading__rect--2"></div>
  </div>
)

export default BaseLoading;