import React from 'react';
import '../App.css';

import ServiceContent from './ServiceContent';

import { useLocation } from 'react-router';
function Services() {
  const location=useLocation();
  return (
    <>
    <ServiceContent/>
    
    </>

  );
}
export default Services;