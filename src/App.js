import abi from "./contract/chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import './App.css';
import Buy from "./component/buy";
import Memos from "./component/memos";
import chai from "./chai.png";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xd90db266bada7349cd0e1a4c82af8d6a5f012c2c"; // Replace with your contract address
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("MetaMask is not installed!");
          return;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        if (accounts.length > 0) {
          setAccount(accounts[0]); // ✅ Set the first account
        }

        // Listen for chain changes and refresh the page
        ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        // Listen for account changes
        ethereum.on("accountsChanged", (newAccounts) => {
          if (newAccounts.length > 0) {
            setAccount(newAccounts[0]); // ✅ Update account state
          } else {
            setAccount("None"); // If disconnected, show "None"
          }
        });

        // Set up ethers provider, signer, and contract
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        setState({ provider, signer, contract });

      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img src={chai} className="img-fluid" alt=".." width="100%" />
      <p
        className="text-muted lead"
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <div className="container">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;

// import abi from "./contract/chai.json";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import './App.css';
// import Buy from "./component/buy";
// import Memos from "./component/memos";
// import chai from "./chai.png";

// function App() {
//   const [state, setState] = useState({
//     provider: null,
//     signer: null,
//     contract: null,
//   });
//   const [account, setAccount] = useState("None");
//   useEffect(() => {
//     const connectWallet = async () => {
//       const contractAddress = "0xd90db266bada7349cd0e1a4c82af8d6a5f012c2c"; // Replace with your contract address
//       const contractABI = abi.abi;

//       try {
//         const { ethereum } = window;
//         if (ethereum) {
//           const accounts = await ethereum.request({ method: "eth_requestAccounts" }); 
//           window.ethereum.on("chainChanged",()=>{
//             window.location.reload();
//           })
//           window.ethereum.on("accountChanged",()=>{
            
//           })
//           // Corrected method name
//           // The accounts variable is now used, so the warning will be gone.
//           console.log("Connected Accounts:", accounts); // Or use it elsewhere
//         } else {
//             alert("MetaMask is not installed!");
//             return; // Stop execution if MetaMask is not available
//         }

//         // Correct way to create the provider in ethers v6:
//         const provider = new ethers.BrowserProvider(ethereum);

//         const signer = await provider.getSigner(); // Get the signer *after* creating the provider

//         const contract = new ethers.Contract(
//           contractAddress,
//           contractABI,
//           signer
//         );
//         setState(account)

//         setState({ provider, signer, contract });
//       } catch (error) {
//         console.error("Error connecting to wallet:", error);
//       }
//     };

//     connectWallet();
//   }, []);

//   // console.log(state);
//   return (
//     <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
//       <img src={chai} className="img-fluid" alt=".." width="100%" />
//       <p
//         class="text-muted lead "
//         style={{ marginTop: "10px", marginLeft: "5px" }}
//       >
//         <small>Connected Account -{account}</small>
//       </p>
//       <div className="container">
//         <Buy state={state} />
//         <Memos state={state} />
//       </div>
//     </div>
//   );
// }

// export default App;// import abi from "./contract/chai.json";
// // import { useState,useEffect } from "react";
// // import {ethers} from "ethers";
// // import './App.css';

// // function App() {
// //   const [state,setState]=useState({
// //     provider:null,
// //     signer:null,
// //     contract:null,
// //   });
// //   useEffect(()=>{
// //    const connectWallet = async()=> {
// //       const contractAddress="";
// //       const contractABI =abi.abi;
// //       try {
// //         const {ethereum}=window;
// //         if (ethereum){
// //           const account = await ethereum.request({
// //             method: "eth _requestAccounts",
// //           });
// //         }
// //         const provider = new ethers.providers.Web3Provider (ethereum);
// //         const signer = provider.getSigner();
// //         const contract =new ethers.Contract (
// //           contractAddress,
// //           contractABI,
// //           signer
// //         );
// //         setState ({provider,signer,contract});

// //       }catch (error){
// //         console.log(error);
// //       }

// //     };
// //     connectWallet ();
// //   },[]);
// //   console.log(state);
// //   return (
// //     <div className="App">
    
// //     </div>
// //   );
// // }

// // export default App;
