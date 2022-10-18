    window.userAddress = null;
    const web3 = new Web3(window.web3.currentProvider);
    const btn = document.getElementById("connect");  
    btn.addEventListener('click', ()=>{
        window.web3.currentProvider.enable();
    window.userAddress = window.localStorage.getItem('userAddress')  
    showAddress(); 
    });

    function showAddress() { 
        if(!window.userAddress) {return false}
        document.getElementById('userAddress').innerText =  `User Address: ${window.userAddress}`
    }
  const SendT = document.getElementById("send");
    SendT.addEventListener('click', ()=> {
        const amout = document.getElementById('amount').value;
        const adds = document.getElementById('address').value;
        const addresses = web3.utils.isAddress(adds);
            console.log(adds);
            console.log(amout);
            console.log(addresses);

    ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: '0x04902EaACa83B1Bec1d0Dc46eD84E5997A059FC6',
            to: adds,
            // value: '0x38D7EA4C68000',
            value: amout,
            gasPrice: '0x09184e72a000',
            gas: '0x186A0',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  });

  const currentChain = ethereum.request({ method: 'eth_chainId' });
    console.log(currentChain + ' <- currentChain'); 
  
