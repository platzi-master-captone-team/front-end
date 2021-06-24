import DeviceDetector from "device-detector-js/"
    
    window.addEventListener("DOMContentLoaded", async () => {
      const deviceDetector = new DeviceDetector()
      const {
        userAgent,
        language,
        platform,
        connection: {
          effectiveType: typeConnection
        },
        userAgentData: {
          mobile: isMobile,
        },
      } = window.navigator
      const {
        client: {
          name: clientName,
          type: clientType,
          version: clientVersion
        },
        device: {
          brand: deviceBrand,
          model: deviceModel,
          type: deviceType
        },
        os: {
          name: osName,
          platform: osPlatform,
          version: osVersion
        }
      } = deviceDetector.parse(userAgent)
      
      const metaData = {
        language,
        platform,
        typeConnection,
        isMobile,
        clientName,
        clientType,
        clientVersion,
        deviceBrand,
        deviceModel,
        deviceType,
        osName,
        osPlatform,
        osVersion,
      }
    await fetch('https://consultify.herokuapp.com/api/metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(metaData)
      })
    })