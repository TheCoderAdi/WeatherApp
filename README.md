# React Native Weather App

This is a simple React Native weather app that allows users to check the current weather based on their location using the Google Maps API and display the weather information.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- React Native Expo
- Android Studio or Xcode (for running on emulators or physical devices)

## Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install project dependencies:

   ```
   npm install
   ```

## Configuration

1. ```
   GOOGLE_MAPS_API=https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}
   ```

2. Make sure you've enabled the Geocoding API and Maps JavaScript API on your Google Cloud Platform account.

## Running the App

### Android

To run the app on an Android emulator or device:

1. Start an Android emulator or connect a physical Android device to your computer.

2. Run the following command:

   ```
   npx expo run:android
   ```
   
## Usage

1. Open the app, and it will request permission to access your device's location.

2. Once permission is granted, the app will use the Google Maps API to determine your current location.

3. The app will then display the current weather information for your location.

## Features

- Get current weather based on the user's location.
- Display weather information such as temperature, humidity, and conditions.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Native: https://reactnative.dev/
- Google Cloud Platform: https://cloud.google.com/
- OpenWeather API: https://openweathermap.org/api

---

