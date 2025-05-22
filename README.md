# Countomat

This is an App that counts everything you want.


# Install on your android device without having to go throught he play store:

1. Build the apk:

```
cd android
./gradlew assembleRelease
```

That will create the apk at:
```android/app/build/outputs/apk/release/app-release.apk```

2. Enable USB Debugging in the developer options on your phone. You need to tap multiple times on the Phone Version to enable developer options.

3. Install the app on the device:

```adb install android/app/build/outputs/apk/release/app-release.apk```

You must have adb installed and your device authorized.