import * as WebBrowser from 'expo-web-browser';

// ... other code ...

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    if(result.type === 'cancel'){
      console.log('User cancelled');
      return;
    }
    console.log('Result: ', result);
  } catch (error) {
    console.error('Error opening browser:', error);
    // Handle error appropriately (e.g., display an error message to the user)
    alert('Failed to open browser. Please try again later.');
  }
}

// ... other code ...