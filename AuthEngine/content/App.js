/*****************************
 * Babelson Audio Technologies
 * Auth engine
 ****************************/
const child_process = require('child_process');
/**
 * check method
 * to log in to server * send user, password and check if true for
 */

/***
 * check haber.bambi@gmail.com 12345678! pluginGuid
 */

/****
 *Devices???
 */

/**
 * Privacy policy*
 */
export default class AuthEngine {
    constructor() {
        var argumentsArray = [...process.argv.slice(2)];
        var result = {success: null, data: null, exception: null};
        if (argumentsArray[0]) {
            switch (argumentsArray[0]) {
                
                case '--mac-serial-number':
                    try {
                        result.data = this.idMethods().getMacSerialNumber().trim();
                        result.success = true
                    } catch (e) {
                        result.success = false;
                        result.exception = 'EXCEPTION_CANT_GET_SERIAL_NUMBER'
                    }
                    break;

                case '--hardware-uuid':
                    try {
                        result.data = this.idMethods().getHardwareUuid().trim();
                        result.success = true
                    } catch (e) {
                        result.success = false;
                        result.exception = 'EXCEPTION_CANT_GET_UUID'
                    }
                    break;

                case '--mac-address':
                    try {
                        result.data = this.idMethods().getMacAddress();
                    } catch (e) {
                        result.success = false;
                        result.exception = 'EXCEPTION_CANT_GET_MAC_ADDRESS';
                    }

                default:
                    break;
            }
        }
        console.log(result);
    }


    getId() {
        let result = '';
        let methods = [
            this.idMethods().getMacAddress.bind(this),
            this.idMethods().getHardwareUuid.bind(this),
            this.idMethods().getMacSerialNumber.bind(this)];
        /*
         methods.forEach((method)=> {
         try {
         result.push(method());
         } catch (e){
         console.log('failed fetching id ',e);
         }
         });*/

        try {
            result = this.idMethods().getMacAddress();
        } catch (e) {
            throw 'EXCEPTION_CANT_GET_MAC_ADDRESS';
        }
        return result;
    }

    idMethods() {
        return {
            getMacSerialNumber: () => {
                return child_process.execSync("system_profiler SPHardwareDataType | grep -iE 'Serial Number'").toString().trim().split(': ')[1];
            },
            getHardwareUuid: ()=> {
                return child_process.execSync("system_profiler SPHardwareDataType | grep -iE 'Hardware'").toString().trim().split(': ')[1];
            },
            getMacAddress: ()=> {
                return require('os').networkInterfaces()['en0'].find((iface)=> {
                    return iface['family'].toLowerCase() == 'ipv4'
                })['mac'].trim();
            }
        }
    }
}

new AuthEngine();





