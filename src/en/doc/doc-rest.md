---
contributors:
- 'ZhouYixun'
---

# REST API

Here is a tutorial on using Sonic's Http protocol Rest API documentation.

## view documentation

1. Click [About Sonic] in the avatar floating box in the upper right corner of the page
2. Click REST API
3. You can enter the document page

## Debug Http REST API online
1. Search for the /login request and log in
2. Get the return value after login, this is your Token. (You can also directly generate Token directly in the Sonic Avatar drop-down box)
3. Go to [Document Management] on the API page
4. Click [Global Parameters]
5. Add a new global parameter named SonicToken, the value is your Token, and the type is header.
6. Done! You can choose the Http request you need to debug and happily debug online~

## Part of the HTTP API explanation

### Occupy the device and obtain remote debugging information through the REST API
::: tip
This function needs to be upgraded to Sonic v2.5.0
:::
1. Refer to the documentation of the REST API to initiate the corresponding HTTP request
2. After the request, the device will enter the `occupied` state, and the available time will be affected by the maximum occupied time of the background management center. Remember to initiate the **release device** request again after use.
3. You can use the returned results for remote adb connection, remote wda connection, etc.

| Body field          | Field analysis                                                                                                                                                                                                                       | Example |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| udId                | device udId (required)                                                                                                                                                                                                               | abcdefg |
| sasRemotePort       | (Only valid for Android devices) Device adb remote connection port. It is not required. If it is 0 or left blank, it will not be exposed or start the corresponding service. The recommended value range is 30000-65535.             | 30001   |
| uia2RemotePort      | (Only valid for Android devices) The device uia2 server remote connection port. It is not required. If it is 0 or left blank, it will not be exposed or start the corresponding service. The recommended value range is 30000-65535. | 30002   |
| sibRemotePort       | (Only available for iOS devices) The device sib remote connection port. It is not required. If it is 0 or left blank, it will not be exposed or start the corresponding service. The recommended value range is 30000-65535.         | 30003   |
| wdaServerRemotePort | (Only available for iOS devices) The device wda server remote connection port. It is not required. If it is 0 or left blank, it will not be exposed or start the corresponding service. The recommended value range is 30000-65535.  | 30004   |
| wdaMjpegRemotePort  | (Only valid for iOS devices) Device wda mjpeg remote connection port. It is not required. If it is 0 or left blank, it will not be exposed or start the corresponding service. The recommended value range is 30000-65535.           | 30005   |

### Release device via REST API
::: tip
This function needs to be upgraded to Sonic v2.5.0, and used in conjunction with `Occupy the device and obtain remote debugging information through the REST API`.
:::
1. Refer to the documentation of the REST API to initiate the corresponding HTTP request
2. After the request is made, the device will enter the state of unoccupied, and services such as sas, sib, uia2, and wda during the occupation period will also release resources.
