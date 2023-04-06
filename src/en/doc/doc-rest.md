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

## Debug Http REST API
1. Search for the /login request and log in
2. Get the return value after login, this is your Token. (You can also directly generate Token directly in the Sonic Avatar drop-down box)
3. Go to [Document Management] on the API page
4. Click [Global Parameters]
5. Add a new global parameter named SonicToken, the value is your Token, and the type is header.
6. Done! You can choose the Http request you need to debug and happily debug online~

## Get the remote debugging port of the device
::: tip
This function needs to be upgraded to Sonic v2.5.0
:::
1. Refer to the documentation of the REST API to initiate the corresponding HTTP request
2. Enter the obtained address in the terminal

**Android**
```bash
adb connect xxx.xxx.xxx.xxx:xxxxx
```
**iOS**
```bash
sib remote connect --host xxx.xxx.xxx.xxx --port xxxxx
```
3. Done!
4. After the request, the device will enter the `occupied` state, remember to initiate the **release device** request again after the request is completed.
