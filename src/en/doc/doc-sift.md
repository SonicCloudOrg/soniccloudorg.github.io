---
contributors:
- 'ZhouYixun'
---

# Image recognition class

Precautions and teaching for using image recognition operations.

## Precautions

The image library currently used by Sonic is based on [sonic-vision-core](https://github.com/SonicCloudOrg/sonic-vision-core). If your image type operation reports an error similar to missing dependencies, please check whether the jar package of the Agent matches your platform.

::: warning note
It is known that some Mac arm64 systems will have problems using this function. You can try to download the Mac x86_64 Agent and replace the original arm64 jar with the Mac x86_64 jar (only the jar can be replaced, and there is no need to replace the binary files under plugins, otherwise the The plugin failed to use because there is no corresponding system architecture)
:::

## Image click

When using image clicks, make sure that:

1. The picture is complex enough, not a single simple picture. **The more complicated the picture, the higher the recognition accuracy**.
2. The picture will not change much in the future, only the location may change.

Instructions:

1. You can directly obtain the current real-time element tree on the [Element] page, and use [Snapshot] to save the screenshot information of the element in the corresponding element details.
2. Select the [Image click] step, and select the corresponding element.
3. If it is a custom screenshot information, you can directly go to the element element page to upload the picture yourself, and then add it to the project.

The effect is as shown in the figure:

![tem](./images/tem.png)

::: warning default image recognition algorithm sequence
SIFT algorithm -> AKAZE algorithm -> template matching method
:::

## Similarity matching

That is, it is asserted how similar the corresponding picture is to the screenshot of the current device. An exception will be thrown if it is not within the expected range.
