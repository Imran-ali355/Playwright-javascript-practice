# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.js >> Search hotel page >> TC-010. Should show error when Check-In date is later than Check-Out date
- Location: tests\search.spec.js:43:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://adactinhotelapp.com/SearchHotel.php"
Received: "https://adactinhotelapp.com/index.php"
Timeout:  90000ms

Call log:
  - Expect "toHaveURL" with timeout 90000ms
    178 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
        - unexpected value "https://adactinhotelapp.com/index.php"

```

```yaml
- table:
  - rowgroup:
    - 'row "AdactIn Group Adactin Group: Hotel Reservation System"':
      - cell "AdactIn Group":
        - img "AdactIn Group"
      - 'cell "Adactin Group: Hotel Reservation System"':
        - 'img "Adactin Group: Hotel Reservation System"'
    - row:
      - cell
- table:
  - rowgroup:
    - 'row "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android. Existing User Login - Build 1 Username Password Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
      - cell "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
        - paragraph: Adactin Launches The Adactin Hotel App!
        - table:
          - rowgroup:
            - row "Hotel Image 3":
              - cell "Hotel Image 3":
                - img "Hotel Image 3"
            - row "The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
              - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android."
        - table:
          - rowgroup:
            - row:
              - cell:
                - link:
                  - /url: https://testflight.apple.com/join/Ai3nVPMD
                  - img
              - cell:
                - link:
                  - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
                  - img
      - 'cell "Existing User Login - Build 1 Username Password Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
        - table:
          - rowgroup:
            - row "Existing User Login - Build 1":
              - cell "Existing User Login - Build 1"
            - row "Username":
              - cell "Username"
              - cell:
                - textbox
            - row "Password":
              - cell "Password"
              - cell:
                - textbox
            - row "Forgot Password?":
              - cell
              - cell "Forgot Password?":
                - link "Forgot Password?":
                  - /url: ForgotPassword.php
            - row:
              - cell
              - cell
            - row "Login":
              - cell
              - cell "Login":
                - button "Login"
            - row "New User Register Here":
              - cell "New User Register Here":
                - link "New User Register Here":
                  - /url: Register.php
        - table:
          - rowgroup:
            - row "Important Note:":
              - cell "Important Note:"
            - 'row "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
              - 'cell "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
                - text: "Hotel Application has 2 builds:"
                - list:
                  - listitem:
                    - strong: Build 1
                    - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                  - listitem:
                    - strong: Build 2
                    - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                    - link "Go to Build 2":
                      - /url: ../HotelAppBuild2
                      - strong: Go to Build 2
            - 'row "For any queries/issues please email: info@adactin.com"':
              - 'cell "For any queries/issues please email: info@adactin.com"':
                - text: "For any queries/issues please email:"
                - link "info@adactin.com":
                  - /url: mailto:info@adactin.com
- table:
  - rowgroup:
    - row:
      - cell
    - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
      - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
        - text: © 2026 -
        - link "Adactin.com":
          - /url: http://www.adactin.com
        - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\aliiaimr\AppData\Local\ms-playwright\chromium_headless_shell-1243\chrome-headless-shell-win64\chrome-headless-shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,BlockOriginHeaderModificationOnRedirect,Translate,AutoDeElevate,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --disable-updater-scheduler --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=C:\Users\aliiaimr\AppData\Local\Temp\playwright_chromiumdev_profile-qEK9gd --remote-debugging-pipe --no-startup-window
<launched> pid=6996
[pid=6996][err] [1104/124601.038:INFO:CONSOLE:43] "Mixed Content: The page at 'https://adactinhotelapp.com/SearchHotel.php' was loaded over HTTPS, but requested an insecure frame 'http://www.adactinhotelapp.com/img-horizontal-carousel/index.html'. This request has been blocked; the content must be served over HTTPS.", source: https://adactinhotelapp.com/SearchHotel.php (43)
[pid=6996][err] [1104/124602.622:INFO:CONSOLE:41] "Mixed Content: The page at 'https://adactinhotelapp.com/SelectHotel.php' was loaded over HTTPS, but requested an insecure frame 'http://www.adactinhotelapp.com/img-horizontal-carousel/index.html'. This request has been blocked; the content must be served over HTTPS.", source: https://adactinhotelapp.com/SelectHotel.php (41)
[pid=6996][err] [1104/124602.950:INFO:CONSOLE:45] "Mixed Content: The page at 'https://adactinhotelapp.com/Logout.php' was loaded over HTTPS, but requested an insecure frame 'http://www.adactinhotelapp.com/img-horizontal-carousel/index.html'. This request has been blocked; the content must be served over HTTPS.", source: https://adactinhotelapp.com/Logout.php (45)
```