'use strict';

const state = {
  isReady: false,
};

const elements = {
  app: document.querySelector('#app'),
};

const init = () => {
  state.isReady = true;
  bindEvents();
};

const bindEvents = () => {
  window.addEventListener('resize', handleResize);
};

const handleResize = () => {
  
};

document.addEventListener('DOMContentLoaded', init);
