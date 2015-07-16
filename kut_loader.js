var KBL_VID = 0x15a2;
var KBL_PID = 0x0073;
var DEVICE_INFO = {"vendorId": KBL_VID, "productId": KBL_PID };

var connectionId = null;

console.log('kut_loader.js sourced');

function initializeHid() {
    chrome.hid.getDevices(DEVICE_INFO, function(devices) {
        if (!devices || !devices.length) {
   	    console.log('device not found');
   	    return;
   	}
   	console.log('Found Kinetis bootloader: ' + devices[0].deviceId);
   	kblHidDevice = devices[0].deviceId;

   	chrome.hid.connect(kblHidDevice, function(connection) {
            console.log('Connected to the HID device!');
   	    connectionId = connection.connectionId;
   	});
    });
}

initializeHid();
