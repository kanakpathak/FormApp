const alphareg = /^[ A-Za-z ]+$/;
const numreg = /^[0-9]{10}$/;

const CheckAlpha = (data) => {
  return data !== "" && data.match(alphareg);
};  

const CheckNum = (data) => {
  return data !== "" && data.match(numreg);
}

export {CheckAlpha, CheckNum};
