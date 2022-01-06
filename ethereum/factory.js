import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa8Fb3Eae4142Feb4aDF461e63a6E02a130fa7277'
);

export default instance;