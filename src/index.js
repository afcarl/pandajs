import PandaDevice from './panda-device';
import PandaAPI from './panda';

export default function Panda (options) {
  options = options || {};

  var device = new PandaDevice(options);
  options.device = device;
  return new PandaAPI(options);
}
