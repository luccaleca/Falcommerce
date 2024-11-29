// src/app/page.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookOpen, faBox, faCreditCard, faCog } from '@fortawesome/free-solid-svg-icons';

import Carrossel from '@/components/home/Carrossel';
import SegundaPergunta from '@/components/home/SegundaPergunta';
import LinhaDoTempo from '@/components/home/LinhaDoTempo';
import CaseSucesso from '@/components/home/CaseSucesso';

const Home = () => {
  return (
    <div>
      <Carrossel />
      <LinhaDoTempo />
      <SegundaPergunta />
      <CaseSucesso />
    </div>
  );
};

export default Home;