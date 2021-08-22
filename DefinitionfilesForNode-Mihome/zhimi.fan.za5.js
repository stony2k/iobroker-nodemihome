const Device = require('../device-miio');
 
module.exports = class extends Device {
 
  static model = 'zhimi.fan.za5';
  static name = 'Smartmi Fan 3';
  static image = 'https://static.home.mi.com/app/image/get/file/developer_1541408255kg3xtr1j.png';
 
  constructor(opts) {
    super(opts);
 
    this._miotSpecType = 'urn:miot-spec-v2:device:fan:0000A005:zhimi-za5:1';
    this._propertiesToMonitor = [
      'fan:on'
      ];
  }
 
  getPower() {
    return this.properties['fan:on'];
  }
   
  setPower(v) {
    return this.miotSetProperty('fan:on', v);
  }

  setMode(v) {
    return this.miotSetProperty('fan:mode', v);
  }
 
  setFanLevel(v) {
    return this.miotSetProperty('fan:fan-level', v);
  }

  setHorizontalSwing(v) {
    return this.miotSetProperty('fan:horizontal-swing', v);
  }

  setHorizontalAngle(v) {
    return this.miotSetProperty('fan:horizontal-angle', v);
  }

  setIndicatorLight(v) {
    return this.miotSetProperty('indicator-light:on', v);
  }
  
  setAlarm(v) {
    return this.miotSetProperty('alarm:alarm', v);
  }

  setMotorController(v) {
    return this.miotSetProperty('motor-controller:motor-control', v);
  }

  setChildLock(v) {
    return this.miotSetProperty('physical-controls-locked:physical-controls-locked', v);
  }

  setOffDelayTime(v) {
    return this.miotSetProperty('off-delay-time:off-delay-time', v);
  }

};