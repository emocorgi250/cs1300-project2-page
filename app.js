// Make a GET request to the fruityvice api to retrieve some fruit data
const apiRequest = async () => {
  /**
   * To access information in this API, we need to send our requests through a proxy due to CORS restrictions. 
   * We'll install a proxy to get around this. Learn more about CORS here https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS. 
   * 
   * Step 1: In your terminal and run `npm install -g local-cors-proxy` (if you run into an access error, try `sudo npm install -g local-cors-proxy`)
   * Step 2: Once installation is finished, run `lcp --proxyUrl https://www.fruityvice.com`
   * Step 3: If you see "Proxy Active", you're all set up! 
   * 
   * Note the port number (eg. PORT: 8010) and fill it in below
   */

  // TODO fill in your own port number 
  const PORT_NUMBER = "8010";

  const baseUrl = `http://localhost:${PORT_NUMBER}/proxy/api/`

}