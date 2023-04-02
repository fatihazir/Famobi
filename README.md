
# THIS FILE CONTAINS INSTALLATION STEPS AND **SCREENSHOTS**

## Installation for macOS 

### Targeted OS is IOS

- Download XCode from appstore
- You need to install node and watchman by using homebrew. If you already have these in your system you can skip the next 2 steps. Make sure your node is 14 or newer. (to check your node version type "node -v" in your terminal.)
- In order to install homebrew, you can simply copy and paste the bash url into your terminal from that link: https://brew.sh/
- After the installation of homebrew open your terminal again. (without quotes) For node: "brew install node" and for watchman: "brew install watchman"
- Check your ruby version from terminal by typing "ruby -v". Current project is using ruby 2.7.6. If it is not your version, you need to use a ruby version manager. There are plenty of version managers, so I will not get into that. You can use whatever you would like to use. (You can use the local version setting rather than global version. I personally use rbenv for that.)
- You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
- To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.
- You will also need to install cocoapods. Open your terminal and type "sudo gem install cocoapods"

## Starting the project for macOs

### Targeted OS is IOS

- Open your terminal in the directory of the project.
- Type "npm install".
- You will also need to install pods. Type "cd ios" and type "pod install"
- Type "cd .." to go back to home directory and type "npx react-native start"
- Open another terminal in the home directory of the project and type "npx react-native run-ios". With that command, your system needs to start the iphone simulator and build the app in it.

-------------------------------------------

## Installation for macOS 

### Targeted OS is Android

- You need to install node and watchman by using homebrew. If you already have these in your system you can skip the next 2 steps. Make sure your node is 14 or newer. (to check your node version type "node -v" in your terminal.)
- In order to install homebrew, you can simply copy and paste the bash url into your terminal from that link: https://brew.sh/
- After the installation of homebrew open your terminal again. (without quotes) For node: "brew install node" and for watchman: "brew install watchman"
- You will need java in your system using homebrew. Open your terminal and type "brew tap homebrew/cask-versions" run it. Then type "brew install --cask zulu11" and run. It should download and setup the java for you.
- Download android studio from google.
- You need to install a sdk. To do that, open Android Studio, click on "More Actions" button and select "SDK Manager". Select Android 13 (Tiramisu) SDK in particular.
- It is time to setup sdk platform. Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked: Android SDK Platform 33, Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image.
- Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 33.0.0 is selected.
- Finally, click "Apply" to download and install the Android SDK and related build tools.
- Now, you need to set some enviroment variables. 
- If you use zsh in your terminal and would like to run only this project once, you can simply open your terminal and copy paste this: "export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools". As long as your system is alive, it will remember the paths. If you do that, you do not need to run the next 2 steps.
- Add the following lines to your ~/.zprofile or ~/.zshrc (if you are using bash, then ~/.bash_profile or ~/.bashrc) config file. "export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools" without quotes.
- Run source ~/.zprofile (or source ~/.bash_profile for bash) to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH.

## Starting the project for macOs

### Targeted OS is Android

- Open your terminal in the directory of the project.
- Type "npm install".
- Open your android studio and from the settings where you clicked to sdk manager(from more actions), click the virtual device manager. Then click the create device and choose pixel 2 and hit next. In the tab of select the system image, select the tiramisu api level 33 and hit next. Now you have a android emulator with tiramisu os. If it does not start otomatically, hit the play button on the device list and run it. Wait for it to be opened and click in your emulator's inside. If you skip that instruction, your computer might fail to detect the emulator which might lead to failure.
- Go back to your terminal in home directory and type "npx react-native start"
- Open another terminal in the home directory of the project and type "npx react-native run-android". With that command, your system is going to start the building process and run the application in emulator.

----------------

## Installation for Windows 

### Targeted OS is Android

- We are going to need the node and java in our system. In order to achieve that, we will use chocolatey package manager. 
- Open your powershell as admin. Run these commands without quotes. " Set-ExecutionPolicy AllSigned", "Set-ExecutionPolicy Bypass -Scope Process"
- Then run this command to install chocolatey: "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
- If you don't see any errors, you are ready to use Chocolatey! Type choco or choco -? to check the installation. During the process, if there is any errors, please google it. There is no certain error to be expected to face.
- It is time to install node and java in our system. Open your terminal as admin and run this: "choco install -y nodejs-lts microsoft-openjdk11". If you have already installed Node on your system, make sure it is Node 14 or newer. If you already have a JDK on your system, we recommend JDK11. You may encounter problems using higher JDK versions.
- Download android studio from google.
- You need to install a sdk. To do that, open Android Studio, click on "More Actions" button and select "SDK Manager". Select Android 13 (Tiramisu) SDK in particular.
- Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked: Android SDK Platform 33, Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image.
- Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected.
Finally, click "Apply" to download and install the Android SDK and related build tools.
- You now need to configure enviroment variables. 
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK which is given in Android Studio "Settings" dialog, under Appearance & Behavior → System Settings → Android SDK. Then save it.
- Open a powershell and check your previous saves. Copy and paste Get-ChildItem -Path Env:\ into powershell. Verify ANDROID_HOME has been added.
- You finally need to add one more variable. Remember your sdk path that you copied from Android Studio "Settings" dialog, under Appearance & Behavior → System Settings → Android SDK. There is a subfolder on that directory called platform-tools. We need to address that folder in our system. I will tell you how to do that.
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Select the Path variable.
Click Edit.
Click New and add the path for platform-tools. Simply paste your android sdk path and add these in the end of it without quotes. "\platform-tools" then save.
- You are ready to go.

## Starting the project for Windows

### Targeted OS is Android

- Open your terminal in the directory of the project.
- Type "npm install".
- Open your android studio and from the settings where you clicked to sdk manager(from more actions), click the virtual device manager. Then click the create device and choose pixel 2 and hit next. In the tab of select the system image, select the tiramisu api level 33 and hit next. Now you have a android emulator with tiramisu os. If it does not start otomatically, hit the play button on the device list and run it. Wait for it to be opened and click in your emulator's inside. If you skip that instruction, your computer might fail to detect the emulator which might lead to failure.
- Go back to your terminal in home directory and type "npx react-native start"
- Open another terminal in the home directory of the project and type "npx react-native run-android". With that command, your system is going to start the building process and run the application in emulator.

## Screenshots
## Ios

- HomeScreen
![HomeScreen screenshot](/screenshots/ios_home.png)

- FilterScreen
![FilterScreen screenshot](/screenshots/ios_filter.png)

- FilteredScreen
![Filtered screenshot](/screenshots/ios_filtered.png)

- GameDetailScreen
![GameDetailScreen screenshot](/screenshots/ios_game_detail.png)

- AlertModal
![AlertModal screenshot](/screenshots/ios_alert.png)

## Android

- HomeScreen
![HomeScreen screenshot](/screenshots/android_home.png)

- FilterScreen
![FilterScreen screenshot](/screenshots/android_filter.png)

- FilteredScreen
![Filtered screenshot](/screenshots/android_filtered.png)

- GameDetailScreen
![GameDetailScreen screenshot](/screenshots/android_game_detail.png)

- AlertModal
![AlertModal screenshot](/screenshots/android_alert.png)

