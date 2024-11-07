// import TextField from "@mui/icons-material/TextField";
// import SelectField from '@mui/icons-material/SelectField'
// import { Component } from "react";
// import { MenuItem } from "@mui/material";

// class Search extends Component {
//     state ={

//         searchText:'',
//         amount 15,
//         apiUrl:'https://pixabay.com/api',
//         apiKey:'46928046-865982fc22d15d4db400c45d6',
//         images:[]
//     }
//     render(){
//         return(
//             <div>
//                 <TextField 

//                 name='searchText'
//                 value={this.state.searchText}
//                 onChange={this.onTextChange}
//                 floatingLabelText = 'search for images'
//                 fullWidth = {true}
//                 />
//                 <SelectField
//                 name='amount'
//                 floatingLabelText='amount'
//                 value={this.state.amount}
//                 onChange={this.onAmontChange}
//                 >
//                     <MenuItem value={5} primaryText='5'/>
//                     <MenuItem value={10} primaryText='10'/>
//                     <MenuItem value={15} primaryText='15'/>
//                     <MenuItem value={30} primaryText='30'/>
//                     <MenuItem value={50} primaryText='50'/>
//                 </SelectField>

//             </div>
//         )
//     }
// }

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

export default function Search() {

  const [searchText, setSearchText] = useState('');
  const [amount, setAmount] = useState(15);
  const [images, setImages] = useState([]);
  const apiUrl = 'https://pixabay.com/api';
  const apiKey = '46928046-865982fc22d15d4db400c45d6';

  const onTextChange = (e) => {
    setSearchText(e.target.value);
    // Add functionality here to fetch images based on search text if needed
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <TextField 
        name="searchText"
        value={searchText}
        onChange={onTextChange}
        label="Search for images"
        fullWidth
      />

      <Select
        name="amount"
        value={amount}
        onChange={onAmountChange}
        fullWidth
        label="Amount"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </div>
  );
};

