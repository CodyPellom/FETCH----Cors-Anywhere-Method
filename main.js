getData = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json"; // site that doesn’t send Access-Control-*
    let getData = await fetch(proxyurl + url);
    let jsonData = await getData.json();
    console.log(jsonData.bpi.USD);
    usd_area.textContent = jsonData.bpi.USD.rate;    
    
};
